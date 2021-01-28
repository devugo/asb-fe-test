import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';

//  Components
import Breadcrumb from "../../components/breadcrumb";
import Header from "../../components/header";
import Summary from "../../components/summary";
import MainContent from "../../components/main-content";

// Actions
import * as resourcesActions from '../../store/actions/resources';

const Home = () => {

    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    const resources = useSelector(state => state.resources.data);
    const dispatch = useDispatch();

    const loadResources = useCallback(async () => {
        // console.log('loading products');
        setError(null);
        // setIsLoading(true);
        setLoading(true);
        try {
            await dispatch(resourcesActions.read());

        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
        // setIsLoading(false);
    }, [dispatch, setLoading, setError]);

    useEffect(() => {
        loadResources();
    }, []);
    return (
        <>
            <Header />
            <Breadcrumb />
            <Summary />
            <MainContent />
        </>
    )
}

export default Home;