import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import CircularProgress from '@mui/material/CircularProgress';
import Mehdi from "../../assets/images/Mehdi";

const Loader = () => {
    return (
        <LoaderContainer>
            {/* <Mehdi width={250} /> */}
            <CircularProgress color="success" />
        </LoaderContainer>
    );
};

export default Loader;
