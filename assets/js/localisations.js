var trans = {}

// English base translations
trans.en = {
  langName: "English",
  flag: 'gb',
  ":save": "Save",
  ':save-as': "Save as",
  ":new-prog": "New program",
  ":delete-prog": "Delete program",
  ":download": "Download current program",
  ":upload": "Upload program",
  ":open": "Open program",
  ":choose-name": "Choose the file name",
  ":unsaved": "You have unsaved changes which will be lost. Do you want to continue?",
  ":exists": "Error, file already exists with this name",
  ":single-file": "Please select a single file to upload",
  ":sure": "Are you sure you want to delete program",
  ":permanent": "This is permanent and cannot be undone",
  ":address": "Enter the address for your Mirobot here",
  ":connect": "Connect"
}

/*
trans['en-US'] = {
  langName: "American English",
  flag: 'us'
}

trans.de = {
  langName: "Deutsch",
  flag: 'de'
}
*/

String.toLocaleString(trans);