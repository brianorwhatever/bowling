import React, { Component, PropTypes } from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import { Mesh, PerspectiveCamera, Scene } from 'react-three';

class ThreeDTitle extends Component {
  constructor(props) {
    super(props);
    this.loadMesh = this.loadMesh.bind(this);
    this.state = {geometry: new THREE.Geometry()};
  }

  componentDidMount() {
    const loader = new THREE.JSONLoader();
    loader.load('./3d/BowlingAlley.json', this.loadMesh);
  }

  loadMesh(geometry) {
    this.setState({geometry : geometry});
    this.forceUpdate();
  }

  render() {
    var aspectratio = this.props.width / this.props.height;

    var cameraprops = {fov : 75, aspect : aspectratio, 
                       near : 1, far : 5000, 
                       position : new THREE.Vector3(0,0,600), 
                       lookat : new THREE.Vector3(0,0,0)};

    var meshPosition = new THREE.Vector3(0,0,0);
    var meshMaterial = new THREE.MeshBasicMaterial;

    return <div className="threed-wrapper">
            <Scene width={this.props.width} height={this.props.height} ref="model" camera="maincamera">
              <PerspectiveCamera name="maincamera" {...cameraprops} />
              <Mesh position={meshPosition} geometry={this.state.geometry} material={meshMaterial}/>
            </Scene>
          </div>;
  }
}

export default ThreeDTitle;