import React, { Component, PropTypes } from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import { Mesh, PerspectiveCamera, Scene, HemisphereLight, DirectionalLight } from 'react-three';

class ThreeDTitle extends Component {
  constructor(props) {
    super(props);
    this.loadPinMesh = this.loadPinMesh.bind(this);
    this.loadBallMesh = this.loadBallMesh.bind(this);
    this.state = {geometry: new THREE.Geometry(), material: new THREE.MeshBasicMaterial};
  }

  componentDidMount() {
    const loader = new THREE.JSONLoader();
    loader.load('./3d/BowlingPin.json', this.loadPinMesh);
    loader.load('./3d/BowlingBall.json', this.loadBallMesh);
  }

  loadPinMesh(geometry, materials) {
    this.setState({geometry, material: new THREE.MeshFaceMaterial( materials )});
    this.forceUpdate();
  }
  loadBallMesh(geometry, materials) {
    this.setState({bowlingBallGeometry: geometry, bowlingBallMaterial: new THREE.MeshFaceMaterial( materials )});
    this.forceUpdate();
  }


  render() {
    var aspectratio = this.props.width / this.props.height;

    var targetPosition = new THREE.Vector3(0,0,0);
    var cameraPosition = new THREE.Vector3(13,2,-3);

    var cameraprops = {fov : 75, aspect : aspectratio, 
                       near : 1, far : 5000, 
                       position : cameraPosition, 
                       lookat : targetPosition};

    var meshPositions = [new THREE.Vector3(-2,-9,0),
                        new THREE.Vector3(-5,-9,1),
                        new THREE.Vector3(-5,-9,-1),
                        new THREE.Vector3(-8,-9,2),
                        new THREE.Vector3(-8,-9,0),
                        new THREE.Vector3(-8,-9,-2),
                        new THREE.Vector3(-11,-9,-3),
                        new THREE.Vector3(-11,-9,-1),
                        new THREE.Vector3(-11,-9,1),
                        new THREE.Vector3(-11,-9,3)];

    var ballPosition = new THREE.Vector3(4,-6,0);


    return <div className="threed-wrapper">
            <Scene transparent={true} width={this.props.width} height={this.props.height} ref="model" camera="maincamera">
              <DirectionalLight color={0xFFFFFF} intensity={0.5} position={cameraPosition} />
              <HemisphereLight skyColor={0xFEFFF0} />
              <PerspectiveCamera name="maincamera" {...cameraprops} />
              <Mesh position={ballPosition} geometry={this.state.bowlingBallGeometry} material={this.state.bowlingBallMaterial} />
              {meshPositions.map((position, index) => {
                return <Mesh position={position} key={index} geometry={this.state.geometry} material={this.state.material} />;
              })}
            </Scene>
          </div>;
  }
}

export default ThreeDTitle;