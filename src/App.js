import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/shapes.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			shapes: ['square', 'circle', 'triangle-up', 'triangle-down',
				'trapezoid', 'parallelogram', 'star-five', 'pentagon',
				'hexagon', 'octagon', 'heart', 'diamond', 'cut-diamond',
				'pacman', 'yin-yang', 'space-invader', 'lock'],
			difficulties: {
				'Noob': this.setDifficultyParameters(20, 3, 60),
				'Hardcore': this.setDifficultyParameters(80, 20, 45),
				'Ultraviolence': this.setDifficultyParameters(200, 70, 30),
			},
		}
	};

	// GItems INT, BItems INT, time INT
	setDifficultyParameters = (GItems, BItems, time) => {
		return { 'GItems': GItems, 'BItems': BItems, 'time': time };
	};

	randomNumber = (min, max) => {
		return Math.floor(Math.random() * (min - max + 1)) + max;
	};

	clicked = (e) => {
		console.log(e.target.id)
	}

	setShapes = (numberOfShapes) => {
		const html = [];
		const shapes = this.state.shapes;

		for (let i = 0; i < numberOfShapes; i++) {
			const top = this.randomNumber(-5, 75);
			const left = this.randomNumber(-5, 75);
			console.log(top, left)
			html.push(
				<div
					key={i}
					id={i}
					className={`${shapes[this.randomNumber(-1, shapes.length)]} shapes-place`}
					style={{ top: top + 'vh', left: left + 'vw', position: 'absolute' }}
					onClick={(e) => this.clicked(e)}
				/>
			)
		};

		return html;
	}

	render() {
		console.log(this.state)
		return (
			<div className="gamebox offset-1 col-10">
				{this.setShapes(100)}
			</div>
		);
	}
}
