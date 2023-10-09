import React from 'react';


class ColorPicker extends React.Component {
 
constructor(props) {
  super(props);

  this.state = {
    color: '',
  }

}

setNameColor = colors => {
  this.setState({
    color: colors,
  })
}

    render() {
        return (
          <div>
            <div className="picker__title">{this.state.color}</div>
            <div>
              <button className="picker__button picker__button_coral" onMouseOver = {()=>this.setNameColor('Coral')} onMouseOut = {()=>this.setNameColor('')}></button>
              <button className="picker__button picker__button_aqua" onMouseOver = {()=>this.setNameColor('Aqua')} onMouseOut = {()=>this.setNameColor('')}></button>
              <button className="picker__button picker__button_bisque" onMouseOver = {()=>this.setNameColor('Bisque')} onMouseOut = {()=>this.setNameColor('')}></button>
            </div>
          </div>
        );
    }
}
   
export default ColorPicker;

