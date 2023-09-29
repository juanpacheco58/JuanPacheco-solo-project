import {BasePage} from './basePage'
import {By, WebElement, WebElementCondition} from 'selenium-webdriver'


export class Tesla extends BasePage {
    clear(searchBar: By) {
        throw new Error("Method not implemented.");
    }
   
    vehcile: By = By.xpath('(//span[@class="tds-site-nav-item-text"])[1]');
    modelX: By = By.xpath('(//div[@class="dx-mega-menu-product"])[3]');
    orderNow: By = By.xpath('(//span[text()="Order Now"])[1]');
    modelXPlaid: By = By.xpath('(//div[@class="group--detail-container"])[2]');
    featureDetail: By = By.xpath('(//span[text()="Feature Details"])[1]');
    //featureDetail: By = By.css('[data-id="modal-trigger-container"] button');

    secondDot: By = By.xpath('(//button[@class="tds-tab"])[4]');
    thirdDot: By = By.xpath('(//button[@class="tds-tab"])[5]');
    fourthDot: By = By.xpath('(//button[@class="tds-tab"])[6]');
    fifthDot: By = By.xpath('(//button[@class="tds-tab"])[7]');
    sixthDot: By = By.xpath('(//button[@class="tds-tab"])[8]');
    seventhDot: By = By.xpath('(//button[@class="tds-tab"])[9]');
    eigthDot: By = By.xpath('(//button[@class="tds-tab"])[10]');
    exitDot: By = By.xpath('(//button[@class="tds-modal-close carousel-modal--close"])[8]');
    paintHeader: By = By.xpath('(//h2[@class="text-loader--content tds-text--center text-loader--subtitle"])[1]');
    blackPaint: By = By.xpath('(//div[@class="observer-placeholder tds-option--type tds-option--circular"])[2]');
    metallicSilverPaint: By = By.xpath('(//div[@class="observer-placeholder tds-option--type tds-option--circular"])[3]')
    deepBluePaint: By = By.xpath('(//div[@class="observer-placeholder tds-option--type tds-option--circular"])[4]')
    ultraRedPaint: By = By.xpath('(//div[@class="observer-placeholder tds-option--type tds-option--circular"])[5]')
    
    wheels: By = By.xpath('(//h2[@class="text-loader--content tds-text--center text-loader--subtitle"])[2]');
    wheelDiv: By = By.xpath('(//fieldset[@class="tds-form-fieldset tds-fieldset tds--vertical_margin--fieldset option-widget--container"])[2]');
    tWheel: By = By.xpath('(//div[@class="observer-placeholder tds-option--type tds-option--circular"])[8]');
    interior: By = By.xpath('(//h2[@class="text-loader--content tds-text--center text-loader--subtitle"])[4]');
    cremeInt: By = By.xpath('(//div[@class="observer-placeholder tds-option--type tds-option--circular"])[15]');
    steering: By = By.xpath('//h4[@class="text-loader--content tds-text--center text-loader--subtitle"]')
    yolk: By = By.xpath('(//div[@class="observer-placeholder tds-option--type tds-option--circular"])[17]')
    selfDriving: By = By.xpath('(//h2[@class="text-loader--content tds-text--center text-loader--subtitle"])[6]')
    selfDrivingAdd: By = By.xpath('(//button[@class="tds-btn tds-btn--primary tds-btn--small"])[2]')
    charging: By = By.xpath('//div[@class="group--child-container tds--vertical_padding--6x option-widget--container"]')
    chargingBox1: By = By.xpath('(//input[@class="tds-form-input-choice"])[1]')
    chargingBox2: By = By.xpath('(//input[@class="tds-form-input-choice"])[2]')
    orderDiv: By = By.xpath('//div[@class="tds--padding tds--align_center"]')
    continue: By = By.xpath('//button[@class="tds-btn tds-btn--primary tds-btn--large tds-btn--width-full continue-btn"]')
    payDiv: By = By.xpath('//div[@class="tds-btn_group tds-btn_group--vertical payment-actions"]')
    
    // Toggle through menu test
    inventory: By = By.xpath('(//a[@class="tds-link tds-link--secondary tds--product-name tds-text--contrast-high"])[1]')
    inventoryText: By = By.xpath('//h1[@class="inventory-app-title"]')
    bottomDiv: By = By.xpath('//ul[@class="tds-list tds-list--horizontal tds-footer-meta"]')
    energy: By = By.xpath('(//span[@class="tds-site-nav-item-text"])[2]')
    solarRoof: By = By.xpath('(//div[@class="dx-mega-menu-product-asset"])[6]') 
    solarDiv: By = By.xpath('//h1[@class="tcl-hero__heading tds-colorscheme--dark"]')
    chargingMenu: By = By.xpath('(//span[@class="tds-site-nav-item-text"])[3]') 
    tripPlaner: By = By.xpath('(//a[@class="tds-link tds-link--secondary tds--product-name tds-text--contrast-high"])[18]')
    discoverMenu: By = By.xpath('(//span[@class="tds-site-nav-item-text"])[4]')
    careers: By = By.xpath('(//a[@class="tds-link tds-link--secondary tds--product-name tds-text--contrast-high"])[33]')
    shopMenu: By = By.xpath('(//span[@class="tds-site-nav-item-text"])[5]')
    apparel: By = By.xpath('(//div[@class="dx-mega-menu-product-asset"])[14]')
    teslaH: By = By.xpath('//a[@class="tds-site-logo-link"]')
    teslaH2: By = By.xpath('//a[@class="tds-site-logo-link"]')
    
    //Demo Test Drive
    demo: By = By.xpath('(//a[@class="tds-link tds-link--secondary tds--product-name tds-text--contrast-high"])[3]')
    modelS: By = By.xpath('//button[text()="Model S"]')
    xButton: By = By.xpath('//div[@class="tds-form-input-trailing tds-form-input-search-clear"]')
    searchBar: By = By.xpath('//input[@class="tds-form-input-search"]')
    shermanOaks: By = By.xpath('//div[@class="location-card  active"]')
    dateDiv: By = By.xpath('(//input[@class="tds-form-input-text"])[1]')
    rightArrow: By = By.xpath('(//button[@type="button"])[29]')
    date: By = By.xpath('(//button[@class="tds-day"])[2]')
    time: By = By.xpath('//select[@class="tds-form-input-select"]')
    noon: By = By.xpath('//option[@value="12:00"]')
    firstName: By = By.id("edit-firstname-td")
    lastName:By = By.id("edit-lastname-td")
    email: By = By.id("edit-usermail-td")
    phone: By = By.id("edit-phonenumber-td")
    powerwallCheck: By = By.id("interest-solar-powerwall")
    scheduleDD: By = By.xpath('(//button[@class="tds-btn"])[1]')
  
    // Changing webpage to spanish 
    globe: By = By.xpath('(//button[@type="button"])[5]')
    mexicoEspanol: By = By.xpath('(//a[@class="tds-link tds-link--secondary tds-locale-selector-language tds-lang--es"])[1]')

    //Tesla Location
    findUs: By = By.xpath('(//a[@class="tds-link tds-link--secondary tds--product-name tds-text--contrast-high"])[28]')
    service: By = By.xpath('(//button[@class="filter-button filter-button--selected"])[2]')
    bodyShops: By = By.xpath('//i[@class="filter-icon tsla-icon-shop-circle tsla-icon-circle-svg"]')
    superchargers: By = By.xpath('//i[@class="filter-icon tsla-icon-bolt-circle-red tsla-icon-circle-svg"]')
    nonTesla: By = By.xpath('//i[@class="filter-icon tsla-icon-party-circle tsla-icon-circle-svg"]')
    destination: By = By.xpath('//i[@class="filter-icon tsla-icon-bolt-circle-dark tsla-icon-circle-svg"]')
    enterLocation: By = By.xpath('//input[@class="search-input tsla-icon-search"]')
    zoom: By = By.xpath('(//button[@class="gm-control-active"])[1]')
    
    // Add to Cart
    mensTurbine: By = By.xpath('(//div[@class="product-tile__links"])[1]')
    grayTone: By = By.xpath('(//div[@class="product__container__details__color__items__item active"])[1]')
    xl: By = By.id("1740253-00-AXL")
    mensRaven: By = By.xpath('(//a[@class="product-tile__link active"])[4]')
    mens3DT: By = By.xpath('(//div[@class="product-tile__links"])[7]')//('(//a[@href="/product/men_s-3d-t-logo-long-sleeve-tee?sku=8529212-00-A"])[1]')
    whiteTone: By = By.xpath('(//span[@class="product__container__details__color__items__item__label"])[2]')
    mensCyber: By = By.xpath('(//div[@class="product-tile__links"])[4]')
    errorMsg: By = By.xpath('(//p[@class="selection-error alert-text"])[1]')
    addToCartBut: By = By.id("addToCartBtn")
    extraLarge1: By = By.xpath('(//input[@class="product__container__details__size__items__item__data"])[4]')
    extraLarge2: By = By.xpath('(//input[@value="XL"])[1]')
    extraLarge3: By = By.xpath('(//div[@class="size-1740250-00-A product__container__details__size__items__item color__key"])[4]')
    extraLarge4: By = By.xpath('(//label[@class="product__container__details__size__items__item__label"])[4]')
    extraLarge5: By = By.xpath('//input[@id="1740253-00-AXL"]')
    extraLarge6: By = By.xpath('(//input[@name="product-size"])[4]')
    extraLarge7: By = By.xpath('(//input[@type="radio"])[4]')
    cart: By = By.xpath('//div[@class="item-without-content nav-cart"]')
    carttResults: By = By.xpath('//main[@class="content-main"]')

    constructor() {
        super({url: 'https://www.tesla.com/'})
    }
    async getResults() {
        return this.getText(this.carttResults)
    }
  
    }
