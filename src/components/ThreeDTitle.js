import React, { Component, PropTypes } from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import { Mesh, PerspectiveCamera, Scene, HemisphereLight, DirectionalLight } from 'react-three';
import OrbitCamera from './OrbitCamera';

class ThreeDTitle extends Component {
  constructor(props) {
    super(props);
    this.loadPinMesh = this.loadPinMesh.bind(this);
    this.loadBallMesh = this.loadBallMesh.bind(this);
    this.state = {geometry: new THREE.Geometry(), material: new THREE.MeshBasicMaterial, cameraazimuth:0};
  }

  componentDidMount() {
    const loader = new THREE.JSONLoader();
    loader.load('./3d/BowlingPin.json', this.loadPinMesh);
    loader.load('./3d/BowlingBall.json', this.loadBallMesh);

    var componentinstance = this;
    var animationcallback = function(/*t*/) {
      var newazimuth = componentinstance.state.cameraazimuth + 0.01;
      
      componentinstance.setState({cameraazimuth: newazimuth, spincameracallback: requestAnimationFrame(animationcallback)});
    };
    // add an interval timer function to rotate the camera
    componentinstance.setState({spincameracallback:requestAnimationFrame(animationcallback)});
  }

  componentWillUnmount() {
    if (this.state.spincameracallback !== null) {
      cancelAnimationFrame(this.state.spincameracallback);
    }
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
    var lightPosition = new THREE.Vector3(-10,10,-10);

    var cameraprops = {fov : 75, aspect : aspectratio, 
                       near : 1, far : 5000, 
                       lookat : targetPosition};


    var meshPositions = [new THREE.Vector3(0,0,0),
                        new THREE.Vector3(1.5,0,1.5),
                        new THREE.Vector3(1.5,0,-1.5),
                        new THREE.Vector3(3,0,-3),
                        new THREE.Vector3(3,0,3),
                        new THREE.Vector3(3,0,0),
                        new THREE.Vector3(4.5,0,1.5),
                        new THREE.Vector3(4.5,0,-1.5),
                        new THREE.Vector3(4.5,0,4.5),
                        new THREE.Vector3(4.5,0,-4.5)];

    var ballPosition = new THREE.Vector3(4,-6,0);

    return <div className="threed-wrapper">
            <Scene transparent={true} width={this.props.width} height={this.props.height} ref="model" camera="maincamera">
              <DirectionalLight color={0xFFFFFF} intensity={0.5} position={lightPosition} />
              <HemisphereLight skyColor={0xFEFFF0} />
              <OrbitCamera cameraprops={cameraprops} distance={-10} azimuth={this.state.cameraazimuth}/>
              {/*<Mesh position={ballPosition} geometry={this.state.bowlingBallGeometry} material={this.state.bowlingBallMaterial} />*/}
              {meshPositions.map((position, index) => {
                return <Mesh position={position} key={index} geometry={this.state.geometry} material={this.state.material} />;
              })}
            </Scene>
          </div>;
  }
}

export default ThreeDTitle;