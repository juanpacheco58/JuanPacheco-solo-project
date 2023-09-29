import { Tesla } from "./pachecoNewPage";
import { Driver } from "selenium-webdriver/chrome";
import {until} from 'selenium-webdriver';




const tesla = new Tesla()
const sleep = tesla.driver.sleep(4000);


test("Click on car", async () => {
await tesla.navigate()
await tesla.driver.manage().window().maximize();
await tesla.click(tesla.vehcile);
await tesla.click(tesla.modelX);
await tesla.click(tesla.orderNow);
await tesla.scrollToElement(tesla.modelXPlaid);
await tesla.driver.sleep(2000);
await tesla.click(tesla.modelXPlaid);
await tesla.click(tesla.featureDetail);
await tesla.click(tesla.secondDot);
await sleep
await tesla.click(tesla.thirdDot);
await sleep
await tesla.click(tesla.fourthDot);
await sleep
await tesla.click(tesla.fifthDot);
await sleep
await tesla.click(tesla.sixthDot);
await sleep
await tesla.click(tesla.seventhDot);
await sleep
await tesla.click(tesla.eigthDot);
await tesla.driver.sleep(2000);
await tesla.click(tesla.exitDot);
await tesla.scrollToElement(tesla.paintHeader);
await tesla.click(tesla.blackPaint);
await sleep
await tesla.click(tesla.metallicSilverPaint);
await sleep
await tesla.click(tesla.deepBluePaint);
await sleep
await tesla.click(tesla.ultraRedPaint);
await sleep
await tesla.click(tesla.blackPaint);
await tesla.driver.sleep(2000);
await tesla.scrollToElement(tesla.wheelDiv);
await tesla.driver.sleep(2000);
await tesla.click(tesla.tWheel);
await tesla.driver.sleep(2000);
await tesla.scrollToElement(tesla.interior);
await tesla.driver.sleep(2000);
await tesla.click(tesla.cremeInt);
await tesla.driver.sleep(2000);
await tesla.scrollToElement(tesla.steering);
await tesla.driver.sleep(2000);
await tesla.click(tesla.yolk);
await tesla.driver.sleep(2000);
await tesla.scrollToElement(tesla.selfDriving);
await tesla.driver.sleep(2000);
await tesla.click(tesla.selfDrivingAdd);
await tesla.driver.sleep(2000);
await tesla.scrollToElement(tesla.charging);
await tesla.driver.sleep(2000);
await tesla.click(tesla.chargingBox1);
await tesla.click(tesla.chargingBox2);
await tesla.driver.sleep(2000);
await tesla.scrollToElement(tesla.orderDiv);
await tesla.click(tesla.continue);
await tesla.driver.sleep(2000);
await tesla.scrollToElement(tesla.payDiv);
await tesla.driver.sleep(2000);
await tesla.driver.quit();
});