import React, { Component, PropTypes } from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import { PerspectiveCamera } from 'react-three';

class OrbitCamera extends Component {
 
  render() {
    // could use sin/cos here but a quat allows for more generic rotation
    var orbitquaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), this.props.azimuth);
    var cameraposition = new THREE.Vector3(this.props.distance,8,15); // camera position at azimuth 0
    cameraposition.applyQuaternion(orbitquaternion);
    return (
      <PerspectiveCamera name="maincamera" position={cameraposition} {...this.props.cameraprops} />
    )
  }
}

OrbitCamera.propTypes = {
  distance: React.PropTypes.number.isRequired,
  azimuth: React.PropTypes.number.isRequired,
  cameraprops: React.PropTypes.object.isRequired
}

export default OrbitCamera;