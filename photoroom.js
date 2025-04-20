// PhotoRoom Premium Unlock (by modifying RevenueCat response)
let response = JSON.parse($response.body);

response.subscriber = {
  entitlements: {
    business: {
      expires_date: "2099-09-09T09:09:09Z",
      product_identifier: "com.background.business.yearly",
      purchase_date: "2022-09-09T09:09:09Z"
    }
  },
  first_seen: "2023-02-23T03:33:33Z",
  subscriptions: {
    "com.background.business.yearly": {
      expires_date: "2099-09-09T09:09:09Z",
      original_purchase_date: "2022-09-09T09:09:09Z",
      purchase_date: "2022-09-09T09:09:09Z",
      ownership_type: "PURCHASED",
      store: "app_store"
    }
  }
};

$done({ body: JSON.stringify(response) });
