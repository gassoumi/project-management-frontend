import React, { Fragment } from 'react';

import { Card } from '@material-ui/core';

import {
  Sparklines,
  SparklinesBars,
  SparklinesLine,
  SparklinesSpots,
  SparklinesCurve,
  SparklinesReferenceLine
} from 'react-sparklines';

function boxMullerRandom() {
  let phase = false,
    x1,
    x2,
    w;

  return (function() {
    if ((phase = !phase)) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(30);
const sampleData1 = randomData(39);
const sampleData2 = randomData(19);
const sampleData3 = randomData(43);
const sampleData4 = randomData(13);
const sampleData5 = randomData(17);
const sampleData6 = randomData(24);
const sampleData7 = randomData(35);
const sampleData100 = randomData(100);

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData1}>
              <SparklinesCurve />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines data={sampleData} limit={20}>
              <SparklinesLine color="#1c8cdc" />
              <SparklinesSpots />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines data={sampleData} limit={20}>
              <SparklinesBars
                style={{
                  fill: '#41c3f9',
                  fillOpacity: '.25'
                }}
              />
              <SparklinesLine
                style={{
                  stroke: '#41c3f9',
                  fill: 'none'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines data={sampleData} limit={20}>
              <SparklinesLine
                style={{
                  stroke: 'none',
                  fill: '#8e44af',
                  fillOpacity: '1'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines data={sampleData} limit={10}>
              <SparklinesBars color="#0a83d8" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine
                height="30"
                style={{
                  fill: 'none'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine
                height="30"
                style={{
                  fill: 'none'
                }}
              />
              <SparklinesReferenceLine height="30" type="mean" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData2}>
              <SparklinesLine color="#1c8cdc" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData3}>
              <SparklinesLine color="#fa7e17" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData4}>
              <SparklinesLine color="#ea485c" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData5}>
              <SparklinesLine color="#56b45d" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData6}>
              <SparklinesLine color="#253e56" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData7}>
              <SparklinesLine color="#8e44af" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine
                style={{
                  fill: 'none'
                }}
              />
              <SparklinesSpots />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine color="#56b45d" />
              <SparklinesSpots
                style={{
                  fill: '#56b45d'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData} margin={6}>
              <SparklinesLine
                style={{
                  strokeWidth: 3,
                  stroke: '#336aff',
                  fill: 'none'
                }}
              />
              <SparklinesSpots
                size={4}
                style={{
                  stroke: '#336aff',
                  strokeWidth: 3,
                  fill: 'white'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData} max={0.5}>
              <SparklinesLine />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesBars
                style={{
                  fill: '#41c3f9'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesBars
                style={{
                  stroke: 'white',
                  fill: '#41c3f9',
                  fillOpacity: '.25'
                }}
              />
              <SparklinesLine
                style={{
                  stroke: '#41c3f9',
                  fill: 'none'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="max" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="min" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="median" />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesBars
                style={{
                  fill: 'slategray',
                  fillOpacity: '.5'
                }}
              />
              <SparklinesReferenceLine />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine
                style={{
                  strokeWidth: 3,
                  stroke: '#336aff',
                  fill: 'none'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData100} width={200}>
              <SparklinesLine
                style={{
                  stroke: '#2991c8',
                  fill: 'none'
                }}
              />
              <SparklinesSpots />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData100}>
              <SparklinesLine
                style={{
                  stroke: 'black',
                  fill: 'none'
                }}
              />
              <SparklinesSpots
                style={{
                  fill: 'orange'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesBars
                style={{
                  stroke: 'white',
                  strokeWidth: '1',
                  fill: '#40c0f5'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine
                style={{
                  stroke: '#8ed53f',
                  strokeWidth: '1',
                  fill: 'none'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine
                style={{
                  stroke: '#d1192e',
                  strokeWidth: '1',
                  fill: 'none'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines height={60} data={sampleData}>
              <SparklinesLine
                style={{
                  stroke: '#559500',
                  fill: '#8fc638',
                  fillOpacity: '1'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines
              height={60}
              data={sampleData}
              style={{
                background: '#272727'
              }}
              margin={10}>
              <SparklinesLine
                style={{
                  stroke: 'none',
                  fill: '#d2673a',
                  fillOpacity: '.5'
                }}
              />
            </Sparklines>
          </Card>
        </div>

        <div className="w-25">
          <Card className="card-box p-3 m-3">
            <Sparklines
              height={60}
              data={sampleData}
              style={{
                background: '#00bdcc'
              }}
              margin={10}>
              <SparklinesLine
                style={{
                  stroke: 'white',
                  fill: 'none'
                }}
              />
              <SparklinesReferenceLine
                style={{
                  stroke: 'white',
                  strokeOpacity: 0.75,
                  strokeDasharray: '2, 2'
                }}
              />
            </Sparklines>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
