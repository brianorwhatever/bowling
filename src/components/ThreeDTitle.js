import React, { Component, PropTypes } from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import { Mesh, PerspectiveCamera, Scene } from 'react-three';

class ThreeDTitle extends Component {
  componentDidMount() {
    var self = this;
    var model = this.refs.model;
    var loader = new THREE.JSONLoader();
    // debugger;
    loader.load('./3d/BowlingAlley.json', function(geometry) {
      // mesh = geometry;
      // debugger;
    });
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
              {/*<Mesh position={meshPosition} geometry={'mesh'} material={meshMaterial}/>*/}
            </Scene>
          </div>;
  }
}

export default ThreeDTitle;