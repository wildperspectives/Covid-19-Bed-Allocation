Covid-19 Bed Allocation System - a project concerning the global pandemic, Covid-19.

In this project, we aim to display a view of the database which could be handled by the administrative authorities.
This view stores the records of all the patients who have been tested positive for Covid-19 and have been allocated beds respectively.

On hosting the website, we are taken to the admin login page,where the admin can login with his/her admin id and password. Admin is securely authenticated.
On logging in successfully, a view of the database will be displayed to the admin.
Along with the view, an add patient navigation link is also displayed.
This view stores and displays the information regarding the patients and the names of the hospitals in which they have been alloted beds.
It includes various fields like Aadhar number of the patient, Patient’s Name, RT PCR Test Status, name of the Hospital being allotted and the icons for the actions that can be performed by the admin.

The admin has all the authority to perform the CRUD (Create,Read,Update and Delete) operations on the view of the database being displayed.

In order to allocate a bed for the new patient, the admin has to register that new patient.
For registering a new patient, the admin clicks on the add patient navigation link, displayed as a button on the top right corner of the page.
On Clicking it, the admin is directed to a registration form, which is used for registering new patients.The registration form has various fields such as Name of the patient, Aadhar number, Mobile number, Vaccination Status, RT PCR Test Status, Gender, City, Pincode and the name of the Hospital being allocated.
The admin has to fill in all the required and necessary details and click on the submit button which says Save.
On clicking the submit button, an alert message saying, “Patient added Successfully” will be displayed and the patient would have been allotted a bed in a specific hospital, whose information will be shown in the database.

Under few circumstances, the admin might have to update the information of the patients.
To read, modify and update the information or details related to the patients, the admin clicks on the update icon.
On clicking that icon, the admin is directed to an update form, which is used for updating the details of  already registered patients.
The details, such as, Name of the patient, Aadhar number, RT PCR test status and name of the hospital allotted, along with a submit button which says Save will be displayed.
The admin can tap into any of the above mentioned details and update them.
On clicking the submit button, an alert message saying, “Information updated Successfully” will be displayed and the details of that particular patient would have  been updated and will be shown in the database.

Once the patient has recovered and tests negative for Covid-19, the admin has to delete the patient from the database, in order to allocate beds for those patients who are in need of the beds.
To delete a patient from the admin clicks on the delete icon.
On clicking the delete icon, a confirm dialog box with ok and cancel will be displayed to take the admin’s final consent.
On clicking ok and confirming, the selected patient will be deleted from the database and an alert message saying, “Patient deleted Successfully” will be displayed.
