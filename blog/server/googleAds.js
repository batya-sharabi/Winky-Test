const { GoogleAdsApi } = require('google-ads-api');

exports.getCampaigns = function () {
    const clientAds = new GoogleAdsApi({
        client_id: '418729407877-qmjrpg2ap7jjp65prnki2mo47to10ibt.apps.googleusercontent.com',
        client_secret: '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',
        developer_token: '4YIu6bTykN56eKJPGLw0QA',
      })
      
      const customer = clientAds.Customer({
        customer_account_id: '5176182394',
        test_customer_id: '2812120274',
      })
      
      var campaigns = customer.campaigns;
}
