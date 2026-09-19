import React from "react";

class Range extends React.Component {

    state = { 
        val: "120",
        radius: "0",
        color: "#0000ff" 
    };

    range = (event) => {
        this.setState({ val: event.target.value })
    };

    changeRadius = (event) => {
        this.setState({ radius: event.target.value })
    }

    changeColor = (event) => {
        this.setState({ color: event.target.value })
    };

    render() {

    let size = `${this.state.val}px`;
    let r = `${this.state.radius}px`;


        return (
            <>
                <p style={{fontFamily: "cursive", margin: "10px"}}>Выберите размер квадрата:</p>
                <input type="range" onInput={this.range} max="240" min="1" value={this.state.val}/>
                <p style={{fontFamily: "cursive", margin: "10px"}}>{size} * {size}</p>

                <div style={{width: size, height: size, backgroundColor: this.state.color, borderRadius: r}}></div>

                <p style={{fontFamily: "cursive", margin: "10px"}}>Скругление углов:</p>
                <input type="range" onInput={this.changeRadius} max="120" min="0" value={this.state.radius}/>
                <p style={{fontFamily: "cursive", margin: "10px"}}>{r}</p>
     

                <p style={{fontFamily: "cursive", margin: "10px"}}>Выберите цвет:</p>
                <input type="color" onInput={this.changeColor} value={this.state.color} />
                <p style={{fontFamily: "cursive", margin: "10px"}}>Текущий цвет: {this.state.color}</p>

            </>
        )
    }
}

export default Range;