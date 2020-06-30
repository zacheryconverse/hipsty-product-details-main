import React from 'react';
import axios from 'axios';
import HeaderBar from './HeaderBar.jsx';
import ProductPreDescription from './ProductPreDescription.jsx';
import ProductDescription from './ProductDescription.jsx';
import ShippingAndReturns from './ShippingAndReturns.jsx';
import SellerData from './SellerData.jsx';
import * as SVG from './svgFiles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: this.props.store || [],
      product: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('/api/stores')
      .then((res) => {
        // const randomStore = Math.floor(Math.random() * res.data.stores.length);
        this.setState({
          store: res.data.stores,
          product: res.data.product,
          loading: false,
        });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <div>
        {this.state.loading
          ? <h1>Loading...</h1>
          : (<div className='body'>
              <div className='headerBar'><HeaderBar /></div>
              <div className='productPictures'>Product Pictures</div>
              <div className='productPurchase'>Product Purchase</div>
              <div className='productReviews'>Product Reviews</div>
              <div className='productDescription'>
                <div>
                  <ProductPreDescription store={this.state.store} product={this.state.product} />
                </div>
                <div>
                  <ProductDescription store={this.state.store} product={this.state.product} />
                </div>
                <div>
                  <ShippingAndReturns store={this.state.store} product={this.state.product} />
                </div>
                <div><SellerData store={this.state.store} /></div>
              </div>
              <span className='storeInfoRoof'>{SVG.storeWave}</span>
              <div className='storeInfo'>storeInfo</div>
              <div className='adsSection'>ads</div>
              <div className='relatedProducts'>Related Products</div>
              <span className='subscribeRoof'>{SVG.subscribeWave}</span>
              <div className='subscribe'>Subscribe</div>
              <span className='preFooterRoof'>{SVG.preFooterWave}</span>
              <div className='preFooter'>Pre-footer area</div>
              <div className='footerBar'>Footer Section</div>
              <span className='preFooterRoof'>{SVG.missOutBell}</span>
            </div>
          )}
      </div>
    );
  }
}

export default App;
