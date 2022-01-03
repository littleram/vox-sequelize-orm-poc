'use strict';

const express = require('express'),
  productHandler = require('./products/handler'),
  merchantHandler = require('./merchants/handler'),
  affiliateRetailerHandler = require('./affiliateRetailers/handler'),
  retailerHandler = require('./retailers/handler'),
  affiliateHandler = require('./affiliates/handler'),
  app = express(),
  port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sequelize POC');
});
// Products
app.get('/products', (req, res) => {
  productHandler.getProducts().then(resp => {
    res.status(200).json({ 'currentProducts': resp });
  });
});

app.get('/products/create', (req, res) => {
  const productReq = productHandler.createProduct({ productId: '123', name: 'Test Product 1' });
  productReq.then(resp => {
    res.status(201).json({ 'product': resp.dataValues });
  });
});

app.route('/products/:id')
  .get((req, res) => {
    productHandler.getProductById(req.params.id).then(resp => {
      res.status(200).json({ 'product': resp });
    });
  })
  .put((req, res) => {
    productHandler.updateProduct(req.params.id, req.body).then(resp => {
      res.status(200).json({ 'product': resp });
    });
  })
  .delete((req, res) => {
    productHandler.deleteProduct(req.params.id).then(resp => {
      res.status(200).json({ 'product': resp });
    });
  });

// Merchants
app.get('/merchants', (req, res) => {
  merchantHandler.getMerchants().then(resp => {
    res.status(200).json({ 'currentMerchants': resp });
  });
});

app.get('/merchants/create', (req, res) => {
  const merchantReq = merchantHandler.createMerchant({ id: 4, productId: '123', buyUrl: 'https://www.test-brand.com' });
  merchantReq.then(resp => {
    res.status(201).json({ 'merchant': resp.dataValues });
  });
});

app.route('/merchants/:id')
  .get((req, res) => {
    merchantHandler.getMerchantById(req.params.id).then(resp => {
      res.status(200).json({ 'merchant': resp });
    });
  })
  .put((req, res) => {
    merchantHandler.updateMerchant(req.params.id, req.body).then(resp => {
      res.status(200).json({ 'merchant': resp });
    });
  })
  .delete((req, res) => {
    merchantHandler.deleteMerchant(req.params.id).then(resp => {
      res.status(200).json({ 'merchant': resp });
    });
  });

// Affiliate Retailers
app.get('/affiliateRetailers', (req, res) => {
  affiliateRetailerHandler.getAffiliateRetailers().then(resp => {
    res.status(200).json({ 'currentAffiliateRetailers': resp });
  });
});

app.get('/affiliateRetailers/create', (req, res) => {
  const affRetReq = affiliateRetailerHandler.createAffiliateRetailer({ id: 4, affiliateId: 2 });
  affRetReq.then(resp => {
    res.status(201).json({ 'affiliateRetailer': resp.dataValues });
  });
});

app.route('/affiliateRetailers/:id')
  .get((req, res) => {
    affiliateRetailerHandler.getAffiliateRetailerById(req.params.id).then(resp => {
      res.status(200).json({ 'affiliateRetailer': resp });
    });
  })
  .put((req, res) => {
    affiliateRetailerHandler.updateAffiliateRetailer(req.params.id, req.body).then(resp => {
      res.status(200).json({ 'affiliateRetailer': resp });
    });
  })
  .delete((req, res) => {
    affiliateRetailerHandler.deleteAffiliateRetailer(req.params.id).then(resp => {
      res.status(200).json({ 'affiliateRetailer': resp });
    });
  });

// Affiliates
app.get('/affiliates', (req, res) => {
  affiliateHandler.getAffiliates().then(resp => {
    res.status(200).json({ 'currentAffiliates': resp });
  });
});

app.route('/affiliates/:id')
  .get((req, res) => {
    affiliateHandler.getAffiliateById(req.params.id).then(resp => {
      res.status(200).json({ 'affiliate': resp });
    });
  })
  .put((req, res) => {
    affiliateHandler.updateAffiliate(req.params.id, req.body).then(resp => {
      res.status(200).json({ 'affiliate': resp });
    });
  })
  .delete((req, res) => {
    affiliateHandler.deleteAffiliate(req.params.id).then(resp => {
      res.status(200).json({ 'affiliate': resp });
    });
  });

// Retailers
app.get('/retailers', (req, res) => {
  retailerHandler.getRetailers().then(resp => {
    res.status(200).json({ 'currentRetailers': resp });
  });
});

app.route('/retailers/:id')
  .get((req, res) => {
    retailerHandler.getRetailerById(req.params.id).then(resp => {
      res.status(200).json({ 'retailer': resp });
    });
  })
  .put((req, res) => {
    retailerHandler.updateRetailer(req.params.id, req.body).then(resp => {
      res.status(200).json({ 'retailer': resp });
    });
  })
  .delete((req, res) => {
    retailerHandler.deleteRetailer(req.params.id).then(resp => {
      res.status(200).json({ 'retailer': resp });
    });
  });

app.get('/retailers-with-affRets/', (req, res) => {
  const ids = req.query.ids.split(',');
  retailerHandler.getRetailersWithAffiliateRetailers(ids).then(resp => {
    res.status(200).json({ 'retailers': resp });
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
