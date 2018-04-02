import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is an awesome website</h1>
        </header>
        <p className="App-intro">
          How to make your webpage faster using prefetch, preload and
          pre-connect.
        </p>
        <div className="container">
          <div>
            <h3>DNS-prefetch </h3>
            <code>
              Tells the broswer that we will need resources from a URL in future
              and browser can resolve the DNS as quickly as possible
            </code>
            <p>Following website is dns-prefetched by the browser:</p>
            <a href="http://soorajchandran.me"> soorajchandran.me </a>
            <h3 className="mt-5"> Preconnect </h3>
            <code>Apart from dns-prefetch TCP handshake happens</code>
            <p>Following website is loaded using Preconnect</p>
            <a href="http://thetrixieapp.com/"> Sample Website </a>
            <h3 className="mt-5"> Pre-render </h3>
            <code> Loads all the asset from a page </code>
            <p>
              My{" "}
              <a href="https://github.com/soorajchandran"> Github profile </a>{" "}
              is pre-rendered{" "}
            </p>
          </div>
          <h2> Sample images </h2>
          <div>
            Image source:
            <a href="https://www.pexels.com/"> Pexel </a>
          </div>
          <div className="row mt-5">
            <div className="col-sm-3">
              <img
                className="sample-images"
                src="https://images.pexels.com/photos/247791/pexels-photo-247791.png"
              />
            </div>
            <div className="col-sm-3">
              <img
                className="sample-images"
                src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg"
              />
            </div>
            <div className="col-sm-3">
              <img
                className="sample-images"
                src="https://images.pexels.com/photos/55766/pexels-photo-55766.jpeg"
              />
            </div>
            <div className="col-sm-3">
              <img
                className="sample-images"
                src="https://images.pexels.com/photos/398533/pexels-photo-398533.jpeg"
              />
            </div>
            <div className="col-sm-3">
              This image is loaded using Prefetch
              <code> Requests the item and stores it in browser cache </code>
              <img
                className="sample-images"
                src="http://soorajchandran.me/images/logo.png"
              />
            </div>
            <div className="col-sm-3">
              <img
                className="sample-images"
                src="https://images.pexels.com/photos/68426/pexels-photo-68426.jpeg"
              />
            </div>
            <div className="col-sm-3">
              <img
                className="sample-images"
                src="https://images.pexels.com/photos/91217/pexels-photo-91217.jpeg"
              />
            </div>
            <div className="col-sm-3">
              <img
                className="sample-images"
                src="https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg"
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tristique ultricies metus, id auctor orci venenatis vitae.
            Vestibulum scelerisque est eros, nec tempor magna commodo eu.
            Curabitur finibus id purus ac blandit. Nulla congue vulputate
            libero, et aliquet tellus rutrum eu. Integer eget massa laoreet,
            rhoncus justo nec, luctus neque. Ut malesuada turpis nulla, in
            auctor nibh auctor vel. Nullam auctor purus sed sem porttitor
            lacinia. Sed tortor elit, ultrices ut tincidunt ac, mollis et felis.
            Sed ac semper quam. Curabitur mollis vehicula metus, in pretium nunc
            pellentesque id. Suspendisse tempus risus id ex fringilla aliquet.
            Aliquam a finibus erat. Fusce sed varius ex. Aenean vel mi eget
            magna varius gravida eu vitae metus. Duis finibus nibh at
            sollicitudin hendrerit. Morbi tristique non lectus sed mollis.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
            ut nisi arcu. Morbi aliquam, augue non efficitur scelerisque, nibh
            orci dictum odio, id accumsan justo nibh a felis. Curabitur sit amet
            maximus turpis. Maecenas ut magna id erat egestas volutpat vel in
            urna. Phasellus porta eu mi ac semper. Nullam fringilla ex nec quam
            semper, ut dapibus urna faucibus. Duis nec lectus eu enim tempor
            rhoncus. Aenean ante nulla, iaculis nec nibh et, faucibus
            consectetur felis. Vivamus quis ex quis odio sodales convallis id
            vel tortor. Aliquam aliquam fringilla sagittis. Fusce et hendrerit
            mi, vel porttitor sem. Praesent tristique sem quam, quis pulvinar
            turpis sollicitudin vitae. Nullam facilisis velit justo, et feugiat
            nisl luctus eget. Sed quis dapibus massa, et convallis turpis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nullam luctus dolor malesuada rhoncus lobortis.
            Etiam quam lacus, euismod sit amet nulla vel, cursus posuere sapien.
            Suspendisse eget enim tincidunt, laoreet risus vel, malesuada mi.
            Sed eu luctus mi, non dignissim justo.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
