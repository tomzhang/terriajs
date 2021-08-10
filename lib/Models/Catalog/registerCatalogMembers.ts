import YDYRCatalogFunction from "./CatalogFunctions/YDYRCatalogFunction";
import YDYRCatalogFunctionJob from "./CatalogFunctions/YDYRCatalogFunctionJob";
import CatalogGroup from "./CatalogGroup";
import CswCatalogGroup from "./Ows/CswCatalogGroup";
import OpenDataSoftCatalogGroup from "./CatalogGroups/OpenDataSoftCatalogGroup";
import SocrataCatalogGroup from "./CatalogGroups/SocrataCatalogGroup";
import ThreddsCatalogGroup from "./CatalogGroups/ThreddsCatalogGroup";
import { ApiTableCatalogItem } from "./CatalogItems/ApiTableCatalogItem";
import BingMapsCatalogItem from "./CatalogItems/BingMapsCatalogItem";
import CartoMapCatalogItem from "./CatalogItems/CartoMapCatalogItem";
import Cesium3DTilesCatalogItem from "./CatalogItems/Cesium3DTilesCatalogItem";
import CesiumTerrainCatalogItem from "./CatalogItems/CesiumTerrainCatalogItem";
import CompositeCatalogItem from "./CatalogItems/CompositeCatalogItem";
import CsvCatalogItem from "./CatalogItems/CsvCatalogItem";
import CzmlCatalogItem from "./CatalogItems/CzmlCatalogItem";
import GeoJsonCatalogItem from "./CatalogItems/GeoJsonCatalogItem";
import GeoRssCatalogItem from "./CatalogItems/GeoRssCatalogItem";
import GltfCatalogItem from "./CatalogItems/GltfCatalogItem";
import GpxCatalogItem from "./CatalogItems/GpxCatalogItem";
import IonImageryCatalogItem from "./CatalogItems/IonImageryCatalogItem";
import KmlCatalogItem from "./CatalogItems/KmlCatalogItem";
import MapboxMapCatalogItem from "./CatalogItems/MapboxMapCatalogItem";
import MapboxStyleCatalogItem from "./CatalogItems/MapboxStyleCatalogItem";
import MapboxVectorTileCatalogItem from "./CatalogItems/MapboxVectorTileCatalogItem";
import OpenDataSoftCatalogItem from "./CatalogItems/OpenDataSoftCatalogItem";
import OpenStreetMapCatalogItem from "./CatalogItems/OpenStreetMapCatalogItem";
import SenapsLocationsCatalogItem from "./CatalogItems/SenapsLocationsCatalogItem";
import SensorObservationServiceCatalogItem from "./Ows/SensorObservationServiceCatalogItem";
import ShapefileCatalogItem from "./CatalogItems/ShapefileCatalogItem";
import SocrataMapViewCatalogItem from "./CatalogItems/SocrataMapViewCatalogItem";
import StubCatalogItem from "./CatalogItems/StubCatalogItem";
import CatalogMemberFactory from "./CatalogMemberFactory";
import CkanCatalogGroup from "./Ckan/CkanCatalogGroup";
import CkanItemReference from "./Ckan/CkanItemReference";
import ArcGisCatalogGroup from "./esri/ArcGisCatalogGroup";
import ArcGisFeatureServerCatalogGroup from "./esri/ArcGisFeatureServerCatalogGroup";
import ArcGisFeatureServerCatalogItem from "./esri/ArcGisFeatureServerCatalogItem";
import ArcGisMapServerCatalogGroup from "./esri/ArcGisMapServerCatalogGroup";
import ArcGisMapServerCatalogItem from "./esri/ArcGisMapServerCatalogItem";
import ArcGisPortalCatalogGroup from "./esri/ArcGisPortalCatalogGroup";
import ArcGisPortalItemReference from "./esri/ArcGisPortalItemReference";
import ArcGisTerrainCatalogItem from "./esri/ArcGisTerrainCatalogItem";
import GtfsCatalogItem from "./Gtfs/GtfsCatalogItem";
import MagdaReference from "./CatalogReferences/MagdaReference";
import WebFeatureServiceCatalogGroup from "./Ows/WebFeatureServiceCatalogGroup";
import WebFeatureServiceCatalogItem from "./Ows/WebFeatureServiceCatalogItem";
import WebMapServiceCatalogGroup from "./Ows/WebMapServiceCatalogGroup";
import WebMapServiceCatalogItem from "./Ows/WebMapServiceCatalogItem";
import WebMapTileServiceCatalogGroup from "./Ows/WebMapTileServiceCatalogGroup";
import WebMapTileServiceCatalogItem from "./Ows/WebMapTileServiceCatalogItem";
import WebProcessingServiceCatalogFunction from "./Ows/WebProcessingServiceCatalogFunction";
import WebProcessingServiceCatalogFunctionJob from "./Ows/WebProcessingServiceCatalogFunctionJob";
import WebProcessingServiceCatalogGroup from "./Ows/WebProcessingServiceCatalogGroup";
import SdmxJsonCatalogGroup from "./SdmxJson/SdmxJsonCatalogGroup";
import SdmxJsonCatalogItem from "./SdmxJson/SdmxJsonCatalogItem";
import SplitItemReference from "./CatalogReferences/SplitItemReference";
import UrlReference, {
  UrlToCatalogMemberMapping
} from "./CatalogReferences/UrlReference";

export default function registerCatalogMembers() {
  CatalogMemberFactory.register(CatalogGroup.type, CatalogGroup);
  CatalogMemberFactory.register(StubCatalogItem.type, StubCatalogItem);
  CatalogMemberFactory.register(
    WebMapServiceCatalogItem.type,
    WebMapServiceCatalogItem
  );
  CatalogMemberFactory.register(
    WebMapServiceCatalogGroup.type,
    WebMapServiceCatalogGroup
  );
  CatalogMemberFactory.register(
    WebFeatureServiceCatalogItem.type,
    WebFeatureServiceCatalogItem
  );
  CatalogMemberFactory.register(
    WebFeatureServiceCatalogGroup.type,
    WebFeatureServiceCatalogGroup
  );
  CatalogMemberFactory.register(
    WebMapTileServiceCatalogGroup.type,
    WebMapTileServiceCatalogGroup
  );
  CatalogMemberFactory.register(
    WebMapTileServiceCatalogItem.type,
    WebMapTileServiceCatalogItem
  );
  CatalogMemberFactory.register(GltfCatalogItem.type, GltfCatalogItem);
  CatalogMemberFactory.register(GeoJsonCatalogItem.type, GeoJsonCatalogItem);
  CatalogMemberFactory.register(GpxCatalogItem.type, GpxCatalogItem);
  CatalogMemberFactory.register(GeoRssCatalogItem.type, GeoRssCatalogItem);
  CatalogMemberFactory.register(CsvCatalogItem.type, CsvCatalogItem);
  CatalogMemberFactory.register(CzmlCatalogItem.type, CzmlCatalogItem);
  CatalogMemberFactory.register(
    ShapefileCatalogItem.type,
    ShapefileCatalogItem
  );
  CatalogMemberFactory.register(ArcGisCatalogGroup.type, ArcGisCatalogGroup);
  CatalogMemberFactory.register(
    ArcGisMapServerCatalogItem.type,
    ArcGisMapServerCatalogItem
  );
  CatalogMemberFactory.register(
    ArcGisMapServerCatalogGroup.type,
    ArcGisMapServerCatalogGroup
  );
  CatalogMemberFactory.register(
    ArcGisFeatureServerCatalogItem.type,
    ArcGisFeatureServerCatalogItem
  );
  CatalogMemberFactory.register(
    ArcGisFeatureServerCatalogGroup.type,
    ArcGisFeatureServerCatalogGroup
  );
  CatalogMemberFactory.register(
    ArcGisPortalCatalogGroup.type,
    ArcGisPortalCatalogGroup
  );
  CatalogMemberFactory.register(
    ArcGisPortalItemReference.type,
    ArcGisPortalItemReference
  );
  CatalogMemberFactory.register(
    ArcGisTerrainCatalogItem.type,
    ArcGisTerrainCatalogItem
  );
  CatalogMemberFactory.register(
    Cesium3DTilesCatalogItem.type,
    Cesium3DTilesCatalogItem
  );
  CatalogMemberFactory.register(GtfsCatalogItem.type, GtfsCatalogItem);

  CatalogMemberFactory.register(BingMapsCatalogItem.type, BingMapsCatalogItem);
  CatalogMemberFactory.register(
    CesiumTerrainCatalogItem.type,
    CesiumTerrainCatalogItem
  );
  CatalogMemberFactory.register(
    IonImageryCatalogItem.type,
    IonImageryCatalogItem
  );
  CatalogMemberFactory.register(
    OpenStreetMapCatalogItem.type,
    OpenStreetMapCatalogItem
  );
  CatalogMemberFactory.register(MagdaReference.type, MagdaReference);
  CatalogMemberFactory.register(KmlCatalogItem.type, KmlCatalogItem);
  CatalogMemberFactory.register(
    MapboxVectorTileCatalogItem.type,
    MapboxVectorTileCatalogItem
  );
  CatalogMemberFactory.register(CartoMapCatalogItem.type, CartoMapCatalogItem);
  CatalogMemberFactory.register(UrlReference.type, UrlReference);
  CatalogMemberFactory.register(SplitItemReference.type, SplitItemReference);
  CatalogMemberFactory.register(YDYRCatalogFunction.type, YDYRCatalogFunction);
  CatalogMemberFactory.register(
    YDYRCatalogFunctionJob.type,
    YDYRCatalogFunctionJob
  );
  CatalogMemberFactory.register(
    SdmxJsonCatalogGroup.type,
    SdmxJsonCatalogGroup
  );
  CatalogMemberFactory.register(SdmxJsonCatalogItem.type, SdmxJsonCatalogItem);
  CatalogMemberFactory.register(
    SenapsLocationsCatalogItem.type,
    SenapsLocationsCatalogItem
  );
  CatalogMemberFactory.register(
    WebProcessingServiceCatalogFunction.type,
    WebProcessingServiceCatalogFunction
  );
  CatalogMemberFactory.register(
    WebProcessingServiceCatalogGroup.type,
    WebProcessingServiceCatalogGroup
  );
  CatalogMemberFactory.register(
    SensorObservationServiceCatalogItem.type,
    SensorObservationServiceCatalogItem
  );
  CatalogMemberFactory.register(
    WebProcessingServiceCatalogFunctionJob.type,
    WebProcessingServiceCatalogFunctionJob
  );
  CatalogMemberFactory.register(
    CompositeCatalogItem.type,
    CompositeCatalogItem
  );
  CatalogMemberFactory.register(CkanCatalogGroup.type, CkanCatalogGroup);
  CatalogMemberFactory.register(CkanItemReference.type, CkanItemReference);
  CatalogMemberFactory.register(ThreddsCatalogGroup.type, ThreddsCatalogGroup);
  CatalogMemberFactory.register(CswCatalogGroup.type, CswCatalogGroup);
  CatalogMemberFactory.register(ApiTableCatalogItem.type, ApiTableCatalogItem);
  CatalogMemberFactory.register(
    OpenDataSoftCatalogGroup.type,
    OpenDataSoftCatalogGroup
  );
  CatalogMemberFactory.register(
    OpenDataSoftCatalogItem.type,
    OpenDataSoftCatalogItem
  );
  CatalogMemberFactory.register(SocrataCatalogGroup.type, SocrataCatalogGroup);
  CatalogMemberFactory.register(
    SocrataMapViewCatalogItem.type,
    SocrataMapViewCatalogItem
  );
  CatalogMemberFactory.register(
    MapboxMapCatalogItem.type,
    MapboxMapCatalogItem
  );
  CatalogMemberFactory.register(
    MapboxStyleCatalogItem.type,
    MapboxStyleCatalogItem
  );

  UrlToCatalogMemberMapping.register(
    matchesExtension("csv"),
    CsvCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("czm"),
    CzmlCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("czml"),
    CzmlCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("geojson"),
    GeoJsonCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("json"),
    GeoJsonCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("kml"),
    KmlCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("gpx"),
    GpxCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("kmz"),
    KmlCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("topojson"),
    GeoJsonCatalogItem.type
  );
  UrlToCatalogMemberMapping.register(
    matchesExtension("georss"),
    GeoRssCatalogItem.type
  );
  // We try to convert zipped shapefiles to geojson
  UrlToCatalogMemberMapping.register(
    matchesExtension("zip"),
    ShapefileCatalogItem.type
  );

  // These items work by trying to match a URL, then loading the data. If it fails, they move on.
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/wms|\=wms/i),
    WebMapServiceCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/wfs|\=wfs/i),
    WebFeatureServiceCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/wmts|\=wmts/i),
    WebMapTileServiceCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/arcgis\/rest\/.*\/MapServer\/\d+\b/i),
    ArcGisMapServerCatalogItem.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/arcgis\/rest\/.*\/MapServer(\/.*)?$/i),
    ArcGisMapServerCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/arcgis\/rest\/.*\/FeatureServer\/\d+\b/i),
    ArcGisFeatureServerCatalogItem.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/arcgis\/rest\/.*\/FeatureServer(\/.*)?$/i),
    ArcGisFeatureServerCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/arcgis\/rest\/.*\/\d+\b/i),
    ArcGisMapServerCatalogItem.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/arcgis\/rest\//i),
    ArcGisCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/rest\/.*\/MapServer\/\d+\b/i),
    ArcGisMapServerCatalogItem.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/rest\/.*\/MapServer(\/.*)?$/i),
    ArcGisMapServerCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/rest\/.*\/FeatureServer\/\d+\b/i),
    ArcGisFeatureServerCatalogItem.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/rest\/.*\/FeatureServer(\/.*)?$/i),
    ArcGisFeatureServerCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    matchesUrl(/\/rest\/.*\/\d+\b/i),
    ArcGisMapServerCatalogItem.type,
    true
  );

  // These don't even try to match a URL, they're just total fallbacks. We really, really want something to work.
  UrlToCatalogMemberMapping.register(
    s => true,
    WebMapServiceCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    s => true,
    WebFeatureServiceCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    s => true,
    ArcGisMapServerCatalogItem.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    s => true,
    ArcGisMapServerCatalogGroup.type,
    true
  );
  UrlToCatalogMemberMapping.register(
    s => true,
    ArcGisFeatureServerCatalogItem.type,
    true
  );
  UrlToCatalogMemberMapping.register(s => true, ArcGisCatalogGroup.type, true);
  UrlToCatalogMemberMapping.register(
    s => true,
    ArcGisFeatureServerCatalogGroup.type,
    true
  );
}

function matchesUrl(regex: RegExp) {
  return /./.test.bind(regex);
}

export function matchesExtension(extension: string) {
  var regex = new RegExp("\\." + extension + "$", "i");
  return function(url: string) {
    return Boolean(url.match(regex));
  };
}