/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, ScrollView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Card, Icon } from 'react-native-elements'

import styles from './style';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      shown: false,
    };
  }

  openLightbox(index){
    this.setState({
      index,
      shown: true,
    });
  };

  hideLightbox(){
    this.setState({
      index: 0,
      shown: false,
    });
  };

  render() {
    const {
      images
    } = this.props;
    const { index, shown } = this.state;
    return (
      <View style={styles.container}>
      <ScrollView directionalLockEnabled={false}
      horizontal={true}>
        {images.map((image, index) => {
          return (
              <TouchableOpacity
                  key={index}
                  onPress={() => this.openLightbox(index)}
                  style={styles.buttonImage}>
                  <Image
                    animation={'bounceIn'}
                    delay={100 * index}
                    duration={500}
                    source={{ uri: image.url }}
                    style={styles.image}
                  />
                </TouchableOpacity>
                );
                })}
          </ScrollView>
            <Modal visible={shown}>
                <View style={styles.buttonClose}>
                    <TouchableOpacity style={{margin: 10}} onPress={() => this.hideLightbox()}>
                        <Icon name='times' type='font-awesome' size={25} color='#fff'/>
                  </TouchableOpacity>
                </View>
                  <ImageViewer index={index} imageUrls={images}/>
            </Modal>
      </View>
    )
  }
}

export default Gallery;
