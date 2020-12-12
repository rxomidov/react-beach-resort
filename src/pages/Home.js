import React, {Component} from 'react';
import Hero from "./Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Button from '../components/StyledHero'

export default class Home extends Component {
    render() {
        return (
            <>
                <Hero hero="defaultHero">
                    <Banner title="luxurious rooms"
                            subtitle="deluxe rooms starting at $299">
                        <Link to="/rooms"
                        className="btn-primary">
                            our rooms
                        </Link>
                    </Banner>
                </Hero>
                <Services/>
                <FeaturedRooms/>
                <Button>
                    lefjfds
                </Button>
            </>
        );
    }
}
