import React from 'react'

export default function Product(props) {

    return (


        <div>
            <div className="characterContainer">
                <p>Name: {props.name}</p>
                <p>Order: {props.order}</p>
                <p>Height: {props.height}</p>
                <p>Weight: {props.weight}</p>
                <div className="gender_text">
                    <p>Male</p>
                    <p>Female</p>
                </div>
                <div className="image_container">
                    <div className="male_container">
                        <img height="150" width="150" src={props.front} alt="" />
                        <img height="150" width="150" src={props.back} alt="" />
                    </div>
                    <div className="female_container">
                        <img height="150" width="150" src={props.front_female} alt="" />
                        <img height="150" width="150" src={props.back_female} alt="" />

                    </div>
                </div>

            </div>



        </div>

    )
}