var ojbk = JSON.parse($response.body);
ojbk['subscriber']['subscriptions'] = {
    'business': {
        'expires_date': '2033-02-23T03:33:33Z',
        'product_identifier': 'com.background.business.yearly',
        'purchase_date': '2023-02-23T03:33:33Z'
    }
};
ojbk['subscriber']['first_seen'] = '2023-02-23T03:33:33Z';
ojbk['subscriber']['entitlements'] = {
    'com.background.business.yearly': {
        'expires_date': '2033-02-23T03:33:33Z',
        'original_purchase_date': '2023-02-23T03:33:33Z',
        'purchase_date': '2023-02-23T03:33:33Z',
        'ownership_type': 'PURCHASED',
        'store': 'app_store'
    }
};
$done({'body': JSON.stringify(ojbk)});
