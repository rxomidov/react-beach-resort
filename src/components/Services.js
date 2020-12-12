import React, {Component} from 'react'
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title:"free cocktail",
                info: "Lorem ipsum dolor sit amet,\n" +
                    "consectetur adipisicing elit. Dolore, explicabo."
            },
            {
                icon: <FaHiking/>,
                title:"free hiking",
                info: "Lorem ipsum dolor sit amet,\n" +
                    "consectetur adipisicing elit. Dolore, explicabo."
            },
            {
                icon: <FaShuttleVan/>,
                title:"free shuttle",
                info: "Lorem ipsum dolor sit amet,\n" +
                    "consectetur adipisicing elit. Dolore, explicabo."
            },
            {
                icon: <FaBeer/>,
                title:"free strongesr",
                info: "Lorem ipsum dolor sit amet,\n" +
                    "consectetur adipisicing elit. Dolore, explicabo."
            }
        ]
    }
    render() {
        return (
            <div className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        );
    }

}
