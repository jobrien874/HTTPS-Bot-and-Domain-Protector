exports.DomainJsonFormer = function (domain) {
    var agreeAtTime = new Date();
    agreeAtTime = agreeAtTime.toISOString();
    agreeAtIP = ''; // add your ip Here
    let json =
    {
        "consent": {
          "agreedAt": agreeAtTime,
          "agreedBy": agreeAtIP,
          "agreementKeys": [
            "DNRA"
          ]
        },
        "contactAdmin": {
          "addressMailing": {
            "address1": process.env.ADDRESS_1,
            "address2": process.env.ADDRESS_2,
            "city": process.env.CITY,
            "country": process.env.COUNTRY,
            "postalCode": process.env.POSTAL,
            "state": process.env.STATE
          },
          "email": process.env.EMAIL_ADDRESS2,
          "fax": "",
          "jobTitle": "Developer",
          "nameFirst": process.env.FIRST_NAME,
          "nameLast": process.env.LAST_NAME,
          "nameMiddle": process.env.MIDDLE_NAME,
          "organization": "",
          "phone": process.env.PHONE
        },
        "contactBilling": {
          "addressMailing": {
            "address1": process.env.ADDRESS_1,
            "address2": process.env.ADDRESS_2,
            "city": process.env.CITY,
            "country": process.env.COUNTRY,
            "postalCode": process.env.POSTAL,
            "state": process.env.STATE
          },
          "email": process.env.EMAIL_ADDRESS,
          "fax": "",
          "jobTitle": "Developer",
          "nameFirst": process.env.FIRST_NAME,
          "nameLast": process.env.LAST_NAME,
          "nameMiddle": process.env.MIDDLE_NAME,
          "organization": "",
          "phone": process.env.PHONE
        },
        "contactRegistrant": {
          "addressMailing": {
            "address1": process.env.ADDRESS_1,
            "address2": process.env.ADDRESS_2,
            "city": process.env.CITY,
            "country": process.env.COUNTRY,
            "postalCode": process.env.POSTAL,
            "state": process.env.STATE
          },
          "email": process.env.EMAIL_ADDRESS,
          "fax": "",
          "jobTitle": "Developer",
          "nameFirst": process.env.FIRST_NAME,
          "nameLast": process.env.LAST_NAME,
          "nameMiddle": process.env.MIDDLE_NAME,
          "organization": "",
          "phone": process.env.PHONE
        },
        "contactTech": {
          "addressMailing": {
            "address1": process.env.ADDRESS_1,
            "address2": process.env.ADDRESS_2,
            "city": process.env.CITY,
            "country": process.env.COUNTRY,
            "postalCode": process.env.POSTAL,
            "state": process.env.STATE
          },
          "email": process.env.EMAIL_ADDRESS,
          "fax": "",
          "jobTitle": "Developer",
          "nameFirst": process.env.FIRST_NAME,
          "nameLast": process.env.LAST_NAME,
          "nameMiddle": process.env.MIDDLE_NAME,
          "organization": "",
          "phone": process.env.PHONE
        },
        "domain": domain,
        "nameServers": [
          "ns1.godaddy.com", "ns2.godaddy.com"
        ],
        "period": 1,
        "renewAuto": true,
        "entityType": "INDIVIDUAL"
    }

    return json;

};
