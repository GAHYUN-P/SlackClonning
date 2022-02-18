import {useState} from "react";
import axios from "axios";
import * as React from 'react';
import {Grid} from "../elements";


import {useDispatch, useSelector} from "react-redux";


import Category from "../shared/Category";
import Post from "../components/Post";
import Header from "../shared/Header";

const MainCs = (props) => {
    // console.log(props)

    const dispatch = useDispatch();
    const [post_list, setPost_List] = useState([])

    React.useEffect(async () => {
        // dispatch(setProduct());
        await axios
            .get("http://52.79.54.15/", {}, {withCredentials: true})
            .then((response) => {
                console.log(response)
                console.log(response.data)
                setPost_List(response.data)
            });
    }, []);

    console.log(post_list)

    const new_post_list = post_list.filter(p => p.category === 'Computer Science');
    console.log(new_post_list);
    
    // setPost_List(post_list.filter(p => p.category === 'Computer Science'));
    // console.log(post_list);
    
    

    return (
        <React.Fragment>
            <Header page="main"/>
            <Grid width="95%" margin="auto">
                <Grid is_flex>
                    <Grid position="fixed" width="15%" height="100%" top="80px">
                        <Category props={post_list}/>
                    </Grid>
                    <Grid is_flex width="100%" padding="80px 0px 0px 20%">
                        {
                            new_post_list.map((p, idx) => {

                                return (<Post {...p} key={p.post_id}></Post>)

                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default MainCs;