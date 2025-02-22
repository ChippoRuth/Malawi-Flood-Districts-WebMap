var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FloodAffectedDistricts_1 = new ol.format.GeoJSON();
var features_FloodAffectedDistricts_1 = format_FloodAffectedDistricts_1.readFeatures(json_FloodAffectedDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloodAffectedDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodAffectedDistricts_1.addFeatures(features_FloodAffectedDistricts_1);
var lyr_FloodAffectedDistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodAffectedDistricts_1, 
                style: style_FloodAffectedDistricts_1,
                popuplayertitle: 'Flood Affected Districts',
                interactive: false,
                title: '<img src="styles/legend/FloodAffectedDistricts_1.png" /> Flood Affected Districts'
            });
var format_IDPCamps_2 = new ol.format.GeoJSON();
var features_IDPCamps_2 = format_IDPCamps_2.readFeatures(json_IDPCamps_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IDPCamps_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IDPCamps_2.addFeatures(features_IDPCamps_2);
cluster_IDPCamps_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IDPCamps_2
});
var lyr_IDPCamps_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IDPCamps_2, 
                style: style_IDPCamps_2,
                popuplayertitle: 'IDP Camps',
                interactive: true,
                title: '<img src="styles/legend/IDPCamps_2.png" /> IDP Camps'
            });
var format_UNICEFWarehouse_3 = new ol.format.GeoJSON();
var features_UNICEFWarehouse_3 = format_UNICEFWarehouse_3.readFeatures(json_UNICEFWarehouse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNICEFWarehouse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNICEFWarehouse_3.addFeatures(features_UNICEFWarehouse_3);
var lyr_UNICEFWarehouse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNICEFWarehouse_3, 
                style: style_UNICEFWarehouse_3,
                popuplayertitle: 'UNICEF Warehouse',
                interactive: false,
                title: '<img src="styles/legend/UNICEFWarehouse_3.png" /> UNICEF Warehouse'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FloodAffectedDistricts_1.setVisible(true);lyr_IDPCamps_2.setVisible(true);lyr_UNICEFWarehouse_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FloodAffectedDistricts_1,lyr_IDPCamps_2,lyr_UNICEFWarehouse_3];
lyr_FloodAffectedDistricts_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'CSV HPM Q3': 'CSV HPM Q3', 'CSV HPM _1': 'CSV HPM _1', 'CSV HPM _2': 'CSV HPM _2', 'CSV HPM _3': 'CSV HPM _3', 'CSV HPM _4': 'CSV HPM _4', 'CSV HPM _5': 'CSV HPM _5', 'CSV HPM _6': 'CSV HPM _6', 'CSV HPM _7': 'CSV HPM _7', 'CSV HPM _8': 'CSV HPM _8', 'CSV HPM _9': 'CSV HPM _9', 'CSV HPM 10': 'CSV HPM 10', });
lyr_IDPCamps_2.set('fieldAliases', {'id': 'id', 'Area': 'Area Name', 'No. People': 'Displaced People', 'Children': 'Displaced Children', 'Clinic': 'Clinic Access', 'Water': 'Water Access', 'School': 'Education Access', 'Food': 'Food Access', });
lyr_UNICEFWarehouse_3.set('fieldAliases', {'id': 'id', });
lyr_FloodAffectedDistricts_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'CSV HPM Q3': 'TextEdit', 'CSV HPM _1': 'TextEdit', 'CSV HPM _2': 'TextEdit', 'CSV HPM _3': 'TextEdit', 'CSV HPM _4': 'TextEdit', 'CSV HPM _5': 'TextEdit', 'CSV HPM _6': 'TextEdit', 'CSV HPM _7': 'TextEdit', 'CSV HPM _8': 'TextEdit', 'CSV HPM _9': 'TextEdit', 'CSV HPM 10': 'TextEdit', });
lyr_IDPCamps_2.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'No. People': 'TextEdit', 'Children': 'TextEdit', 'Clinic': 'TextEdit', 'Water': 'TextEdit', 'School': 'TextEdit', 'Food': 'TextEdit', });
lyr_UNICEFWarehouse_3.set('fieldImages', {'id': 'TextEdit', });
lyr_FloodAffectedDistricts_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'header label - always visible', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'CSV HPM Q3': 'no label', 'CSV HPM _1': 'no label', 'CSV HPM _2': 'no label', 'CSV HPM _3': 'no label', 'CSV HPM _4': 'no label', 'CSV HPM _5': 'no label', 'CSV HPM _6': 'no label', 'CSV HPM _7': 'no label', 'CSV HPM _8': 'no label', 'CSV HPM _9': 'no label', 'CSV HPM 10': 'no label', });
lyr_IDPCamps_2.set('fieldLabels', {'id': 'header label - visible with data', 'Area': 'header label - visible with data', 'No. People': 'header label - visible with data', 'Children': 'header label - visible with data', 'Clinic': 'header label - visible with data', 'Water': 'header label - visible with data', 'School': 'header label - visible with data', 'Food': 'header label - visible with data', });
lyr_UNICEFWarehouse_3.set('fieldLabels', {'id': 'no label', });
lyr_UNICEFWarehouse_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});