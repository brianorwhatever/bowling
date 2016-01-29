import React, { Component, PropTypes } from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import { Mesh, PerspectiveCamera, Scene, HemisphereLight } from 'react-three';

class ThreeDTitle extends Component {
  constructor(props) {
    super(props);
    this.loadMesh = this.loadMesh.bind(this);
    this.state = {geometry: new THREE.Geometry(), material: new THREE.MeshBasicMaterial};
  }

  componentDidMount() {
    const loader = new THREE.JSONLoader();
    loader.load('./3d/BowlingPin.json', this.loadMesh);
  }

  loadMesh(geometry, materials) {

    this.setState({geometry, material: new THREE.MeshFaceMaterial( materials )});
    this.forceUpdate();
  }

  render() {
    var aspectratio = this.props.width / this.props.height;

    var cameraprops = {fov : 75, aspect : aspectratio, 
                       near : 1, far : 5000, 
                       position : new THREE.Vector3(10,10,0), 
                       lookat : new THREE.Vector3(0,0,0)};

    var meshPosition = new THREE.Vector3(0,0,0);

    // hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
    //     hemiLight.color.setHSL( 0.6, 1, 0.6 );
    //     hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    //     hemiLight.position.set( 0, 500, 0 );
    //     scene.add( hemiLight );

    return <div className="threed-wrapper">
            <Scene transparent={true} width={this.props.width} height={this.props.height} ref="model" camera="maincamera">
              <HemisphereLight skyColor={0xffffff} />
              <PerspectiveCamera name="maincamera" {...cameraprops} />
              <Mesh position={meshPosition} geometry={this.state.geometry} material={this.state.material}/>
            </Scene>
          </div>;
  }
}

export default ThreeDTitle;