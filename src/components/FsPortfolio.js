import React, { Component } from 'react';
import Card from './Card';
import portfolio from "../portfolio.json"

class FsPortfolio extends Component {

    state = {
        portfolio
    };
    render() {

        return (
            <div className="wrapper">

                <h3>Portfolio</h3>
                <hr />
                <div className="row">
                {this.state.portfolio.map(portfolio => (
                    <Card 
                    title={portfolio.title}
                    image={portfolio.image}
                    href={portfolio.href}
                    desc={portfolio.desc}
                    />

                )
                )
                }

            </div>
            </div>
        );
    }
};

export default FsPortfolio