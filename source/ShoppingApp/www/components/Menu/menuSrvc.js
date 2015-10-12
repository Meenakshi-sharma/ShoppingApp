var menuSrvc;

menuSrvc = (function($log, $http, $q) {

    console.log("srgvc menu");

    var menuSrvc =  [
            {
                id:1,
                "name": "Men",
                "Subcategories": {
                    "Clothing": {
                        "description": "Mens Clothing"
                    },
                    "Footwear": {
                        "description": "Mens Footwear"
                    },
                    "Suits": {
                        "description": "Mens Suits"
                    }
                }
            },
            {
                id:2,
                "name": "Women",
                "Subcategories": [
                    {
                        "Clothing": {
                            "description": "Womens Clothing"
                        },
                        "Footwear": {
                            "description": "Womens Footwear"
                        },
                        "Dresses": {
                            "description": "Womens Dresses"
                        }
                    }
                ]
            },
            {
                id:3,
                "name": "Kids",
                "Subcategories": [
                    {
                        "Clothing": {
                            "description": "Kids Clothing"
                        },
                        "Footwear": {
                            "description": "Kids Footwear"
                        },
                        "Fashion": {
                            "description": "Kids Fashion"
                        }
                    }
                ]
            },
            {
                id:4,
                "name": "Accessories",
                "Subcategories": [
                    {
                        "Stoles and Scarfs": {
                            "description": "Stoles and Scarfs"
                        },
                        "Belts and Badges": {
                            "description": "Belts and Badges"
                        }
                    }
                ]
            },
            { 
                id:5,
                "name": "Handbags",
                "Subcategories": [
                    {
                        "Leather handbags": {
                            "description": "Leather handbags"
                        },
                        "Other handbags": {
                            "description": "Other handbags"
                        }
                    }
                ]
            }
        ]
 

    return menuSrvc;
});

menuModule.factory('menuSrvc', menuSrvc);