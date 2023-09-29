import { Tesla } from "./pachecoNewPage";
import { Driver } from "selenium-webdriver/chrome";
import { Key } from "selenium-webdriver";
const fs = require("fs")



const tesla = new Tesla()

describe("Tesla Test Plan", () => {

    beforeEach(async () =>{
    await tesla.navigate()
});
    afterAll(async () => {
    await tesla.driver.quit()
});
    
test('Toggling with menu test', async() => {
    await tesla.driver.manage().window().maximize();
    await tesla.click(tesla.vehcile);
    await tesla.click(tesla.inventory);
    await tesla.driver.sleep(2000);
    await tesla.click(tesla.energy);
    await tesla.click(tesla.solarRoof);
    await tesla.driver.sleep(2000);
    await tesla.click(tesla.chargingMenu);
    await tesla.click(tesla.tripPlaner);
    await tesla.driver.sleep(2000);
    await tesla.click(tesla.discoverMenu);
    await tesla.click(tesla.careers);
    await tesla.driver.sleep(2000);
    await tesla.click(tesla.teslaH);
    await tesla.driver.sleep(2000);
    const hoverable = tesla.driver.findElement(tesla.shopMenu);
    const actions = tesla.driver.actions({async: true});
    await actions.move({origin: hoverable}).perform();
    await tesla.click(tesla.apparel);
    await tesla.driver.sleep(2000);
    await tesla.click(tesla.teslaH2);
    await tesla.driver.sleep(2000);
    });
    
    test(" Scheduling a Demo Drive",async ()=> {
     await tesla.driver.manage().window().maximize();
     await tesla.click(tesla.vehcile);
     await tesla.click(tesla.demo);
     await tesla.driver.sleep(3000);
     await tesla.click(tesla.modelS);
     await tesla.driver.sleep(3000);
     await tesla.scrollToElement(tesla.shermanOaks);
     await tesla.driver.sleep(2000)
     await tesla.click(tesla.shermanOaks);
     await tesla.driver.sleep(2000);
     await tesla.click(tesla.dateDiv);
     await tesla.driver.sleep(2000);
     await tesla.click(tesla.rightArrow);
     await tesla.click(tesla.date);
     await tesla.click(tesla.time);
     await tesla.click(tesla.noon);
     await tesla.driver.sleep(1000);
     await tesla.sendKeys(tesla.firstName,"Nick");
     await tesla.sendKeys(tesla.lastName,"Mullen");
     await tesla.sendKeys(tesla.email,"Mulldog101@gmail.com");
     await tesla.sendKeys(tesla.phone,8187475141);
     await tesla.driver.sleep(3000);
     await tesla.click(tesla.powerwallCheck);
     await tesla.click(tesla.powerwallCheck);
     await tesla.driver.sleep(3000);
     //await tesla.click(tesla.scheduleDD);
     
    });
    test("Changing language to spanish", async() => {
        await tesla.driver.manage().window().maximize();
        await tesla.driver.sleep(1000);
        await tesla.click(tesla.globe);
        await tesla.click(tesla.mexicoEspanol);
        await tesla.click(tesla.vehcile);
        await tesla.driver.sleep(2000);
        await tesla.click(tesla.energy);
        await tesla.click(tesla.chargingMenu);
        await tesla.driver.sleep(2000);
    });
    
    test('Findin a Tesla location', async()=> {
        await tesla.driver.manage().window().maximize();
        await tesla.click(tesla.discoverMenu);
        await tesla.click(tesla.findUs);
        await tesla.driver.sleep(4000);
        await tesla.sendKeys(tesla.enterLocation,"Sherman Oaks, Los Angeles, CA, USA");
        await tesla.sendKeys(tesla.enterLocation, Key.ENTER);
        await tesla.driver.sleep(2000);
        await tesla.click(tesla.service);
        await tesla.click(tesla.bodyShops);
        await tesla.click(tesla.superchargers);
        await tesla.driver.sleep(2000);
        await tesla.click(tesla.nonTesla);
        await tesla.click(tesla.destination);
        await tesla.click(tesla.zoom);
        await tesla.driver.sleep(2000);

    });
    
    test('Add to cart function', async ()=> {
        await tesla.driver.manage().window().maximize();
        const hoverable = tesla.driver.findElement(tesla.shopMenu);
        const actions = tesla.driver.actions({async: true});
        await actions.move({origin: hoverable}).perform();
        await tesla.click(tesla.apparel);
        await tesla.driver.sleep(4000);
        await tesla.click(tesla.mensRaven);
        await tesla.click(tesla.addToCartBut);
        let errorText = await tesla.getText(tesla.errorMsg);
        expect(errorText).toContain("Please select a size");
        await tesla.driver.sleep(1000);
        await tesla.click(tesla.extraLarge3);
        await tesla.driver.sleep(1000);
        await tesla.click(tesla.addToCartBut);
        await tesla.driver.sleep(4000);
        await tesla.click(tesla.cart);
        await tesla.driver.sleep(4000);
        /*fs.writeFile(`${__dirname}/cart.png`,
        await tesla.driver.takeScreenshot(), "base64",
        (e)=> {
        if (e) console.log(e)
        else console.log("Add to Cart results success");
    });*/
        await tesla.getResults();


    });
    
});
