# Australian Payphones
----

Got a text from TLSPayphone? 

Unsure how to find out where it came from because the text gives you a phone number and you can only [search by location](https://www.telstra.com.au/find-us?search=payphone)?

**You're in the right spot!**

---

This is a database with every current Telstra payphone in Australia, including Calling Line Identification (cli) numbers for easy searching.


**payphone_register_updated.xlsx**
is an updated version of Telstra's provided [payphones_register.xlsx](https://www.telstra.com.au/content/dam/tcom/personal/consumer-advice/payphones/payphone_register.xlsx)
- including additional columns:
    - cli 
    - fnn
    - incoming_calls
    - wifi
    - fibre
    - adsl
- updated latitude/longitude coordinates for one payphone (cabinet id: 08898125X2) with wildly incorrect coordinates
    - address is 347 Stuart Hwy, The Narrows NT
    - coordinates were [(-33.807056, 151.087057)](https://www.google.com/maps/place/33%C2%B048'25.4%22S+151%C2%B005'13.4%22E/@-33.8070515,151.0844821,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-33.807056!4d151.087057?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D) in NSW
    - updated to [(-12.42695, 130.864432)](https://www.google.com/maps/place/12%C2%B025'37.0%22S+130%C2%B051'52.0%22E/@-12.4208762,130.8410691,13.25z/data=!4m4!3m3!8m2!3d-12.42695!4d130.864432?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D) in NT
- a handful of payphones could not be found using the API or the Telstra website
    - these have been moved to the bottom, as they do not have a cli or fnn number
    - some have been [removed](https://www.telstra.com.au/consumer-advice/payphones#:~:text=Payphone%20Removal%20Proposal%20Notifications%20%2D%20Concluded%20to%20Proceed) or are [set to be removed](https://www.telstra.com.au/consumer-advice/payphones#:~:text=no%20current%20proposals.-,Payphone%20removal%20proposal%20notifications,-Outside%2037%20Victoria), however this was not updated in the Excel spreadsheet
    - I suspect all of these entries are payphones that have been removed or moved without the excel being updated

**payphones.json** is a json file that organises this payphone information by cli number, making it quick to search
- the Calling Line Identification (cli) is the number you recieve in your text from TLSPayphone

---

Initial [payphones_register.xlsx](https://www.telstra.com.au/content/dam/tcom/personal/consumer-advice/payphones/payphone_register.xlsx) pulled from the [Telstra website](https://www.telstra.com.au/consumer-advice/payphones)

Additional payphone information pulled from the API reverse engineered from the [Payphone search](https://www.telstra.com.au/find-us?search=payphone) on Telstra's website

---
*Last Updated: 07 April 2026*
