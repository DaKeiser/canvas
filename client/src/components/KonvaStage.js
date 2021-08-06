import React from 'react'
import { Stage, Layer } from 'react-konva'
import PixelsMap from './PixelsMap'

// type Props = {}

const KonvaStage = (props) => {
//   static defaultProps = {}
// Props
// canvasSize
// pixelSize
// pixels - Complete Array, LocalStorageManager.canvasPixels.getCanvasCache(this.props.canvasId).pixelMap
// example CanvasCache = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,
// 10,10,10,16,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,33,33,33,33,10,10,10,10,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,33,33,33,10,10,10,10,10,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,
// 10,10,10,10,33,33,33,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,144,144,144,10,10,10,10,10,10,10,10,33,33,33,10,10,10,10,10,0,0,0,0,0,240,240,240,240,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,144,144,199,144,10,10,10,10,10,10,10,10,33,33,33,10,10,10,10,10,0,0,0,0,0,240,0,0,0,0,240,240,0,0,0,0,0,0,
// 240,240,0,0,0,0,10,10,10,144,144,199,144,144,10,10,10,10,10,10,10,10,33,33,33,10,10,10,10,10,0,0,0,0,0,240,0,0,0,0,0,0,240,240,240,240,0,0,0,0,0,0,0,10,10,10,144,144,144,144,144,10,10,10,10,10,10,10,10,33,33,33,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,240,0,0,0,0,10,10,192,192,144,144,144,10,10,10,10,10,10,10,33,33,
// 33,33,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,240,240,240,0,0,0,0,240,204,0,0,0,10,10,10,114,192,192,144,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,240,33,33,240,240,240,240,204,240,0,0,0,10,10,114,50,114,192,10,10,10,10,10,0,0,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,0,240,81,33,240,240,204,
// 240,0,0,0,0,10,98,66,114,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,240,240,240,240,33,81,240,240,0,0,0,0,10,65,98,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,240,33,33,33,81,81,240,204,240,0,0,0,0,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,
// 240,240,240,240,240,81,81,240,0,0,0,0,0,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,240,0,0,0,0,240,33,33,81,81,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,0,0,240,240,240,240,0,0,0,0,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,0,
// 0,0,0,0,0,0,0,240,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,0,0,240,240,240,0,0,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,108,0,124,0,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
// 0,0,0,0,0,164,0,0,0,124,0,124,124,0,124,124,0,124,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,80,80,80,80,80,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,0,0,0,124,0,124,0,124,0,124,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,80,15,15,15,15,0,0,192,0,0,0,0,0,0,0,0,0,0,164,0,0,0,124,0,15,15,15,15,15,0,124,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,15,240,15,240,15,0,
// 192,0,0,0,0,0,0,0,0,0,0,0,164,0,0,108,0,124,15,240,15,240,15,124,0,108,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,15,15,15,15,15,0,0,192,0,0,0,0,0,0,0,0,0,0,164,0,0,0,0,0,15,15,15,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,15,15,15,209,209,209,113,0,0,0,0,0,0,0,0,0,0,0,164,0,0,0,0,0,15,15,240,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,224,
// 224,47,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,160,160,0,0,0,0,0,57,57,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,224,224,0,196,47,47,0,0,0,0,0,0,0,0,0,0,0,0,0,160,121,121,0,0,0,57,122,122,122,41,0,0,0,121,121,0,0,0,0,0,0,0,0,0,240,0,0,0,31,0,0,196,0,31,0,0,97,0,65,0,0,0,0,0,0,0,0,160,0,0,121,0,121,57,122,122,164,41,121,0,121,0,0,0,0,0,0,
// 0,0,0,0,0,0,0,0,0,31,0,0,0,0,31,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,121,0,57,122,122,122,41,0,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,177,177,176,176,176,176,176,16,32,48,64,80,96,0,0,0,0,0,0,0,0,0,0,57,122,122,122,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,177,177,0,0,31,176,0,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,122,122,122,41,0,0,0,
// 0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,31,0,0,0,0,31,0,0,97,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,138,154,106,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,138,154,106,90,0,0,0,0,0,0,0,0,0,0,0,
// 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,138,154,106,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,154,106,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,90,138,106,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
// 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,138,106,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,138,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,90,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,121,153,153,137,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,121,153,153,153,137,137,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,121,121,153,121,0,137,121,137,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,153,0,0,0,153,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// gridColumns = sqrt(length)
// 

    return (
      <Stage
        width={props.canvasSize}
        height={props.canvasSize}
        style={{
          'backgroundColor': "red",
          'backgroundSize': props.pixelSize,
          'width': props.canvasSize,
        }}
        draggable={false}
      >
        <Layer>
          <PixelsMap pixels={props.pixels}
                     pixelSize={props.pixelSize}
                     gridColumns={props.gridColumns}
          />
        </Layer>
      </Stage>
    )
}

KonvaStage.defaultProps = {}

export default KonvaStage