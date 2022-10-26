import { Box, Checkbox, FormControlLabel, FormGroup, Modal, Slider } from "@material-ui/core";
import { IFilterModalProps } from "../interfaces/IFilterModalProps";

function FilterModal(props : IFilterModalProps){
    const {open,year,handleClose,handleSliderChange,handleSubmit} = props;
    return (
        <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    <div className="topPart">
                        <div className="leftPart">
                            <h1>type</h1>
                            <FormGroup style={{display:"flex",flexDirection:"row"}}>
                                <FormControlLabel control={<Checkbox style={{color:"#d9d9d9"}}/>} label="note" />
                                <FormControlLabel control={<Checkbox style={{color:"#d9d9d9"}}/>} label="Discuss" />
                                <FormControlLabel control={<Checkbox style={{color:"#d9d9d9"}}/>} label="Paased exam" />
                            </FormGroup>
                            <h1>oldest year</h1>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px"}}>
                                <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" onChange={handleSliderChange} style={{width:"300px"}} />
                                <h2>{year} year ago</h2>
                            </div>
                        </div>
                        <div className="rightPart">
                            <h1>sort by</h1>
                            <FormGroup style={{display:"flex",flexDirection:"column"}}>
                                <FormControlLabel control={<Checkbox style={{color:"#d9d9d9"}}/>} label="lastest year" />
                                <FormControlLabel control={<Checkbox style={{color:"#d9d9d9"}}/>} label="most like" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="bottomPart" onClick={handleSubmit}>DONE</div>
                </Box>
            </Modal>
    )
}

export default FilterModal;