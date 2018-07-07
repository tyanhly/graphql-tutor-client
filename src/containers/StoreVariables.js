
import { connect } from "react-redux";
import CStoreVariables from '../components/StoreVariables';

const mapStateToProps = state => {
    return { storeState: state};
};


const StoreVariables = connect(mapStateToProps, null)(CStoreVariables);
export default StoreVariables;