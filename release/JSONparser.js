keyArray = []
linkDataArrray = []

function createMasterKeyIndex() {
    callflow = 
{
    "id": "000000009203840923480923823490023",
    "callFlowSchemaVersion": 2,
    "callEventHeaders": {
        "revel-target-platform": "rc2"
    },
    "contextAttributes": {},
    "masterSurveyId": "3489-23480923384290",
    "name": "M2343242342334",
    "voiceVendorType": "TWILIO",
    "memberInformationSource": "CHANNEL_SERVICE_INTERNAL",
    "voiceXmlSettings": {
        "answeringMachineDetectionSettings": {
            "finalSilenceInMilliseconds": 1500,
            "timeoutInMilliseconds": 3000,
            "maxTimeInMilliseconds": 30000
        },
        "inputInstructionSettings": [
            {
                "id": "SINGLE_SELECT",
                "confidenceLevel": 0.75,
                "sensitivity": 0.5,
                "speedVersusAccuracy": 0.5,
                "completeTimeoutInMilliseconds": 500,
                "incompleteTimeoutInMilliseconds": 4000,
                "maxSpeechTimeoutMilliseconds": 60000,
                "timeoutInMilliseconds": 4000,
                "interDigitTimeoutInMilliseconds": 0,
                "termTimeoutInMilliseconds": 0,
                "termMaxDigits": false
            },
            {
                "id": "FULL_DATE",
                "confidenceLevel": 0.65,
                "sensitivity": 0.5,
                "speedVersusAccuracy": 0.5,
                "completeTimeoutInMilliseconds": 500,
                "incompleteTimeoutInMilliseconds": 4000,
                "maxSpeechTimeoutMilliseconds": 60000,
                "timeoutInMilliseconds": 4000,
                "interDigitTimeoutInMilliseconds": 8000,
                "termTimeoutInMilliseconds": 4000,
                "termMaxDigits": true
            },
            {
                "id": "NUMBER",
                "confidenceLevel": 0.65,
                "sensitivity": 0.5,
                "speedVersusAccuracy": 0.5,
                "completeTimeoutInMilliseconds": 500,
                "incompleteTimeoutInMilliseconds": 4000,
                "maxSpeechTimeoutMilliseconds": 60000,
                "timeoutInMilliseconds": 4000,
                "interDigitTimeoutInMilliseconds": 4000,
                "termTimeoutInMilliseconds": 4000,
                "termMaxDigits": true
            },
            {
                "id": "PHONE_NUMBER",
                "confidenceLevel": 0.65,
                "sensitivity": 0.5,
                "speedVersusAccuracy": 0.5,
                "completeTimeoutInMilliseconds": 500,
                "incompleteTimeoutInMilliseconds": 4000,
                "maxSpeechTimeoutMilliseconds": 60000,
                "timeoutInMilliseconds": 4000,
                "interDigitTimeoutInMilliseconds": 4000,
                "termTimeoutInMilliseconds": 4000,
                "termMaxDigits": true
            }
        ]
    },
    "supportedLanguages": [
        "en-US",
        "es-MX"
    ],
    "supportedDispositions": [
        "MEMBER"
    ],
    "supportedThemes": [
        "THEME_RISK",
        "THEME_CONFIDENCE",
        "THEME_OPTIONS"
    ],
    "programId": "aa896076-7117-44e8-bd77-82001d781582",
    "defaultManagedPhoneNumberId": "3f9ea59b-9ab0-4d28-a456-2e9dfdf9b3c1",
    "managedPhoneNumbers": [
        {
            "id": "3f9ea59b-9ab0-4d28-a456-2e9dfdf9b3c1",
            "phoneNumberE164": "+160223423423234",
            "defaultInitialCallState": {
                "language": "en-US",
                "disposition": "MEMBER",
                "sex": "UNSPECIFIED",
                "theme": "THEME_RISK"
            }
        },
        {
            "id": "2e7c486e-39e2-4df1-857f-31b42b5456f3",
            "phoneNumberE164": "+1877234342324234",
            "defaultInitialCallState": {
                "language": "en-US",
                "disposition": "MEMBER",
                "sex": "UNSPECIFIED",
                "theme": "THEME_RISK"
            }
        },
        {
            "id": "06b9fb44-22bc-491f-b335-a55369603d52",
            "phoneNumberE164": "+1602234342423",
            "defaultInitialCallState": {
                "language": "es-MX",
                "disposition": "MEMBER",
                "sex": "UNSPECIFIED",
                "theme": "THEME_RISK"
            }
        },
        {
            "id": "255d5b76-85a4-4475-a2f1-238ee258e6bc",
            "phoneNumberE164": "+1877234342234",
            "defaultInitialCallState": {
                "language": "es-MX",
                "disposition": "MEMBER",
                "sex": "UNSPECIFIED",
                "theme": "THEME_RISK"
            }
        }
    ],
    "tenantId": "5feb76403d3a85363ef1aae0",
    "outboundIntroInstructionId": "OUTBOUND-INTRO",
    "inboundIntroInstructionId": "INBOUND-INTRO",
    "unexpectedErrorInstructionId": "ERROR",
    "voiceMailInstructionId": "AMD-OFFRAMP",
    "outsideTransferWindowInstructionId": "THE_END",
    "consecutiveNoInputFailureThreshold": 4,
    "transferHoursEnforced": false,
    "transferHoursTimeZone": "America/Chicago",
    "transferHoursInactiveDates": [],
    "transferHours": [],
    "callRecordingLevel": "ALL",
    "callRecordingPercentage": 0,
    "verifyAudioFilesExist": false,
    "instructions": [
        {
            "description": "OUTBOUND-INTRO",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Hello. This is Mercy Care calling to encourage you to complete an important health screening.",
                            "audioFile": "outbound.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Spanish. Hello. This is Mercy Care calling to encourage you to complete an important health screening.",
                            "audioFile": "ES-outbound.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
                
            ],
            "nextInstructionId": "OUTBOUND-LANGUAGE-OPTION",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "OUTBOUND-INTRO",
                "tags": [
                    "OUTBOUND-INTRO"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "OUTBOUND-INTRO"
        },
        {
            "description": "INBOUND-INTRO",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Thanks for calling back. We called to encourage you to complete an important health screening.",
                            "audioFile": "inbound.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Spanish. Thanks for calling back. We called to encourage you to complete an important health screening.",
                            "audioFile": "ES-inbound_intro.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "INBOUND-LANGUAGE-OPTION",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-INTRO",
                "tags": [
                    "INBOUND-INTRO"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "INBOUND-INTRO"
        },
        {
            "id": "OUTBOUND-LANGUAGE-OPTION",
            "instructionType" : "SINGLE_SELECT",
            "description": "OUTBOUND-LANGUAGE-OPTION",
            "nextInstructionId": "OUTBOUND-CONFIRM-NAME",
            "invalidInputInstructionId": "OUTBOUND-CONFIRM-NAME",
            "callUpdateType": "LANGUAGE",
            "skippedDispositions": [],
            "skippedSexes": [],
            "bargeable": false,
            "instructionVariants": [
              {
                "language": "en-US",
                "utteranceType": "BOTH",
                "dispositions": [
                  "MEMBER"
                ],
                "sexes": [
                  "FEMALE",
                  "MALE",
                  "UNSPECIFIED"
                ],
                "theme": "*",
                "prompts": [
                  {
                    "type": "AUDIO",
                    "text": "silence",
                    "sayAs": "RAW",
                    "audioFile": "silence3s.wav"
                  }
                ]
              },
              {
                "language": "es-MX",
                "utteranceType": "BOTH",
                "dispositions": [
                  "MEMBER"
                ],
                "sexes": [
                  "FEMALE",
                  "MALE",
                  "UNSPECIFIED"
                ],
                "theme": "*",
                "prompts": [
                  {
                    "type": "AUDIO",
                    "text": "silence",
                    "sayAs": "RAW",
                    "audioFile": "silence3s.wav"
                  }
                ]
              }
            ],
            "expectedResponses": [
              {
                "id": "SWITCH-TO-ENGLISH-OUT",
                "nextInstructionId": "OUTBOUND-CONFIRM-NAME",
                "staticResponseType": "NONE",
                "customDigitUtteranceSet": [
                  "1"
                ],
                "customVoiceUtteranceSet": [
                  {
                    "language": "en-US",
                    "utteranceSet": [
                      "one"
                    ]
                  },
                  {
                    "language": "es-MX",
                    "utteranceSet": [
                      "uno"
                    ]
                  }
                ],
                "platformMetaData": {
                  "masterCatalogueId": "OUTBOUND_LANGUAGE_ENGLISH",
                  "tags": []
                },
                "callUpdateValue": "en-US"
              },
              {
                "id": "SWITCH-TO-SPANISH-OUT",
                "nextInstructionId": "OUTBOUND-CONFIRM-NAME",
                "staticResponseType": "NONE",
                "customDigitUtteranceSet": [
                  "2"
                ],
                "customVoiceUtteranceSet": [
                  {
                    "language": "en-US",
                    "utteranceSet": [
                      "eight"
                    ]
                  },
                  {
                    "language": "es-MX",
                    "utteranceSet": [
                      "ocho"
                    ]
                  }
                ],
                "platformMetaData": {
                  "masterCatalogueId": "OUTBOUND_LANGUAGE_SPANISH",
                  "tags": []
                },
                "callUpdateValue": "es-MX"
              }
            ],
            "retryAttempts": [],
            "platformMetaData": {
              "masterCatalogueId": "OUTBOUND_LANGUAGE_OPTION",
              "tags": []
            }
        },
        {
            "id": "OUTBOUND-CONFIRM-NAME",
            "instructionType" : "SINGLE_SELECT",
            "description": "OUTBOUND-CONFIRM-NAME",
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "skippedDispositions": [],
            "skippedSexes": [],
            "bargeable": false,
            "instructionVariants": [
              {
                "language": "en-US",
                "utteranceType": "BOTH",
                "dispositions": [
                  "MEMBER"
                ],
                "sexes": [
                  "FEMALE",
                  "MALE",
                  "UNSPECIFIED"
                ],
                "theme": "*",
                "prompts": [
                  {
                    "type": "AUDIO",
                    "text": "Is this",
                    "sayAs": "RAW",
                    "audioFile": "confirmName.wav"
                  },
                  {
                    "personalizationInformationType": "FULL_NAME",
                    "type": "PERSONALIZATION",
                    "sayAs": "RAW"
                  }
                ]
              },
              {
                "language": "es-MX",
                "utteranceType": "BOTH",
                "dispositions": [
                  "MEMBER"
                ],
                "sexes": [
                  "FEMALE",
                  "MALE",
                  "UNSPECIFIED"
                ],
                "theme": "*",
                "prompts": [
                  {
                    "type": "AUDIO",
                    "text": "Is this",
                    "sayAs": "RAW",
                    "audioFile": "ES-confirmName.wav"
                  },
                  {
                    "personalizationInformationType": "FULL_NAME",
                    "type": "PERSONALIZATION",
                    "sayAs": "RAW"
                  }
                ]
              }
            ],
            "expectedResponses": [
              {
                "id": "OUTBOUND-IDV-NAME-YES",
                "nextInstructionId": "BODY",
                "staticResponseType": "NONE",
                "customDigitUtteranceSet": [
                  "1"
                ],
                "customVoiceUtteranceSet": [
                  {
                    "language": "en-US",
                    "utteranceSet": [
                      "yes",
                      "yeah",
                      "yup",
                      "yeh",
                      "one",
                      "1"
                    ]
                  },
                  {
                    "language": "es-MX",
                    "utteranceSet": [
                      "yes",
                      "one",
                      "1",
                      "uno",
                      "see",
                      "si",
                      "c"
                    ]
                  }
                ],
                "platformMetaData": {
                  "masterCatalogueId": "OUTBOUND_IDV_PASS",
                  "tags": []
                },
                "callUpdateValue": ""
              },
              {
                "id": "OUTBOUND-IDV-NAME-NO",
                "nextInstructionId": "TERMINATE-1",
                "staticResponseType": "NONE",
                "customDigitUtteranceSet": [
                  "3"
                ],
                "customVoiceUtteranceSet": [
                  {
                    "language": "en-US",
                    "utteranceSet": [
                      "no",
                      "nope",
                      "nah",
                      "naw",
                      "three",
                      "3"
                    ]
                  },
                  {
                    "language": "es-MX",
                    "utteranceSet": [
                      "no",
                      "three",
                      "tres"
                    ]
                  }
                ],
                "platformMetaData": {
                  "masterCatalogueId": "OUTBOUND_IDV_FAIL",
                  "tags": []
                },
                "callUpdateValue": ""
              }
            ],
            "retryAttempts": [
              {
                "bargeable": true,
                "instructionVariants": [
                  {
                    "language": "en-US",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                      "MEMBER"
                    ],
                    "sexes": [
                      "FEMALE",
                      "MALE",
                      "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                      {
                        "type": "AUDIO",
                        "text": "error",
                        "sayAs": "RAW",
                        "audioFile": "ERROR.wav"
                      },
                      {
                        "type": "AUDIO",
                        "text": "is this",
                        "sayAs": "RAW",
                        "audioFile": "confirmName.wav"
                      },
                      {
                        "personalizationInformationType": "FULL_NAME",
                        "type": "PERSONALIZATION",
                        "sayAs": "RAW"
                      },
                      {
                        "type": "AUDIO",
                        "text": "Press 1 for yes or 3 for no",
                        "sayAs": "RAW",
                        "audioFile": "Yes_No_dtmf.wav"
                      }
                    ]
                  },
                  {
                    "language": "es-MX",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                      "MEMBER"
                    ],
                    "sexes": [
                      "FEMALE",
                      "MALE",
                      "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                      {
                        "type": "AUDIO",
                        "text": "error",
                        "sayAs": "RAW",
                        "audioFile": "ES-ERROR.wav"
                      },
                      {
                        "type": "AUDIO",
                        "text": "is this",
                        "sayAs": "RAW",
                        "audioFile": "ES-confirmName.wav"
                      },
                      {
                        "personalizationInformationType": "FULL_NAME",
                        "type": "PERSONALIZATION",
                        "sayAs": "RAW"
                      },
                      {
                        "type": "AUDIO",
                        "text": "Press 1 for yes or 3 for no",
                        "sayAs": "RAW",
                        "audioFile": "ES-Yes_No_dtmf.wav"
                      }
                    ]
                  }
                ]
              },
              {
                "bargeable": true,
                "instructionVariants": [
                  {
                    "language": "en-US",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                      "MEMBER"
                    ],
                    "sexes": [
                      "FEMALE",
                      "MALE",
                      "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                      {
                        "type": "AUDIO",
                        "text": "error",
                        "sayAs": "RAW",
                        "audioFile": "ERROR.wav"
                      },
                      {
                        "type": "AUDIO",
                        "text": "is this",
                        "sayAs": "RAW",
                        "audioFile": "confirmName.wav"
                      },
                      {
                        "personalizationInformationType": "FULL_NAME",
                        "type": "PERSONALIZATION",
                        "sayAs": "RAW"
                      },
                      {
                        "type": "AUDIO",
                        "text": "Press 1 for yes or 3 for no",
                        "sayAs": "RAW",
                        "audioFile": "Yes_No_dtmf.wav"
                      }
                    ]
                  },
                  {
                    "language": "es-MX",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                      "MEMBER"
                    ],
                    "sexes": [
                      "FEMALE",
                      "MALE",
                      "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                      {
                        "type": "AUDIO",
                        "text": "error",
                        "sayAs": "RAW",
                        "audioFile": "ES-ERROR.wav"
                      },
                      {
                        "type": "AUDIO",
                        "text": "is this",
                        "sayAs": "RAW",
                        "audioFile": "ES-confirmName.wav"
                      },
                      {
                        "personalizationInformationType": "FULL_NAME",
                        "type": "PERSONALIZATION",
                        "sayAs": "RAW"
                      },
                      {
                        "type": "AUDIO",
                        "text": "Press 1 for yes or 3 for no",
                        "sayAs": "RAW",
                        "audioFile": "ES-Yes_No_dtmf.wav"
                      }
                    ]
                  }
                ]
              }
            ],
            "platformMetaData": {
              "masterCatalogueId": "OUTBOUND_CONFIRM_NAME",
              "tags": []
            }
        },

        {
          "id": "INBOUND-LANGUAGE-OPTION",
          "instructionType" : "SINGLE_SELECT",
          "description": "INBOUND-LANGUAGE-OPTION",
          "nextInstructionId": "INBOUND-IDV",
          "invalidInputInstructionId": "INBOUND-IDV",
          "callUpdateType": "LANGUAGE",
          "skippedDispositions": [],
          "skippedSexes": [],
          "bargeable": false,
          "instructionVariants": [
            {
              "language": "en-US",
              "utteranceType": "BOTH",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "To continue this call in English, please stay on the line. Press 2 for Espanol",
                  "sayAs": "RAW",
                  "audioFile": "silence3s.wav"
                }
              ]
            },
            {
              "language": "es-MX",
              "utteranceType": "BOTH",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "To continue this call in English, please stay on the line. Press 2 for Espanol",
                  "sayAs": "RAW",
                  "audioFile": "silence3s.wav"
                }
              ]
            }
          ],
          "expectedResponses": [
            {
              "id": "SWITCH-TO-ENGLISH",
              "nextInstructionId": "INBOUND-IDV",
              "staticResponseType": "NONE",
              "customDigitUtteranceSet": [
                "1"
              ],
              "customVoiceUtteranceSet": [
                {
                  "language": "en-US",
                  "utteranceSet": [
                    "one"
                  ]
                },
                {
                  "language": "es-MX",
                  "utteranceSet": [
                    "uno"
                  ]
                }
              ],
              "platformMetaData": {
                "masterCatalogueId": "INBOUND_LANGUAGE_ENGLISH",
                "tags": []
              },
              "callUpdateValue": "en-US"
            },
            {
              "id": "SWITCH-TO-SPANISH",
              "nextInstructionId": "INBOUND-IDV",
              "staticResponseType": "NONE",
              "customDigitUtteranceSet": [
                "2"
              ],
              "customVoiceUtteranceSet": [
                {
                  "language": "en-US",
                  "utteranceSet": [
                    "eight"
                  ]
                },
                {
                  "language": "es-MX",
                  "utteranceSet": [
                    "ocho"
                  ]
                }
              ],
              "platformMetaData": {
                "masterCatalogueId": "INBOUND_LANGUAGE_SPANISH",
                "tags": []
              },
              "callUpdateValue": "es-MX"
            }
          ],
          "retryAttempts": [],
          "platformMetaData": {
            "masterCatalogueId": "INBOUND_LANGUAGE_OPTION",
            "tags": []
          }
        },

        {
            "description": "AMD_OFFRAMP",
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Hello, this is MercyCare calling with a message. Press 1 to hear it.",
                            "audioFile": "voicemail_intro.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "text": "hello",
                            "audioFile": "silence3s.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "text": "hello",
                            "audioFile": "voicemail.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                
                {
                    "language": "es-MX",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Hello, this is MercyCare calling with a message. Press 1 to hear it.",
                            "audioFile": "ES-voicemail_intro.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "text": "hello",
                            "audioFile": "silence3s.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "text": "hello",
                            "audioFile": "ES-voicemail_HEALTHY.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "THE_END",
            "expectedResponses": [
                {
                    "id": "AMD_OFFRAMP_HUMAN",
                    "nextInstructionId": "REENTRY",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [],
                    "platformMetaData": {
                        "masterCatalogueId": "AMD_OFFRAMP_HUMAN",
                        "tags": []
                    },
                    "callUpdateValue": ""
                }
            ],
            "instructionType": "SINGLE_SELECT",
            "platformMetaData": {
                "masterCatalogueId": "AMD_OFFRAMP",
                "tags": []
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "bargeable": true,
            "id": "AMD-OFFRAMP"
        },
        {
            "description": "REENTRY",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "We’re calling to encourage you to complete an important health screening.",
                            "audioFile": "intro.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "We’re calling to encourage you to complete an important health screening.",
                            "audioFile": "ES-intro.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "BODY",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "REENTRY",
                "tags": [
                    "REENTRY"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "REENTRY"
        },
        {
            "description": "ERROR",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Error",
                            "audioFile": "ERROR.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Error",
                            "audioFile": "ES-ERROR.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "ERROR",
                "tags": [
                    "ERROR"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "ERROR"
        },
        {
            "description": "ERROR-VOICE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Error Voice",
                            "audioFile": "error_voice.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Error Voice",
                            "audioFile": "ES-error_voice.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "ERROR-VOICE",
                "tags": [
                    "ERROR-VOICE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "ERROR-VOICE"
        },

        {
          "id": "INBOUND-IDV",
          "instructionType" : "STATEMENT",
          "description": "INBOUND-IDV",
          "nextInstructionId": "INBOUND-IDV-PHONE",
          "skippedDispositions": [],
          "skippedSexes": [],
          "instructionVariants": [
            {
              "language": "en-US",
              "utteranceType": "NONE",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "To protect your privacy, we first need to verify who we are speaking with.",
                  "sayAs": "RAW",
                  "audioFile": "protectPrivacy.wav"
                }
              ]
            },
            {
              "language": "es-MX",
              "utteranceType": "NONE",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "To protect your privacy, we first need to verify who we are speaking with.",
                  "sayAs": "RAW",
                  "audioFile": "ES-protectPrivacy.wav"
                }
              ]
            }
          ],
          "platformMetaData": {
            "masterCatalogueId": "INBOUND-IDV",
            "tags": [
              "INBOUND-IDV"
            ]
          }
        },
    
        {
          "id": "INBOUND-IDV-PHONE",
          "skipWhenMemberPhoneNumberRecognized": true,
          "instructionType" : "PHONE_NUMBER",
          "description": "INBOUND IDV for a UNKNOWN number. Asking for phone number.",
          "nextInstructionId": "INBOUND-IDV-DOB",
          "invalidInputInstructionId": "FAILURE",
          "skippedDispositions": [],
          "skippedSexes": [],
          "bargeable": true,
          "instructionVariants": [
            {
              "language": "en-US",
              "utteranceType": "DIGITS",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "We do not recognize the number you are calling from. Please enter your 10-digit phone number we have on file for you with your keypad.",
                  "sayAs": "RAW",
                  "audioFile": "enterPhone.wav"
                }
              ]
            },
            {
              "language": "es-MX",
              "utteranceType": "DIGITS",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "We do not recognize the number you are calling from. Please enter your 10-digit phone number we have on file for you with your keypad.",
                  "sayAs": "RAW",
                  "audioFile": "ES-enterPhone.wav"
                }
              ]
            }
          ],
          "retryAttempts": [],
          "platformMetaData": {
            "masterCatalogueId": "INBOUND-IDV-PHONE",
            "tags": [
              "INBOUND-IDV-PHONE"
            ]
          }
        },
    
        {
          "id": "INBOUND-IDV-DOB",
          "instructionType" : "FULL_DATE",
          "description": "INBOUND IDV asking for DOB",
          "nextInstructionId": "INBOUND-IDV-VERIFY",
          "invalidInputInstructionId": "INBOUND-IDV-FAIL",
          "skippedDispositions": [],
          "skippedSexes": [],
          "bargeable": true,
          "instructionVariants": [
            {
              "language": "en-US",
              "utteranceType": "DIGITS",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "Please enter your birthdate and 4-digit birth year on your keypad. For example, if your birthdate is November 3, 1965, you would enter 11-03-1965.",
                  "sayAs": "RAW",
                  "audioFile": "enterBirthDate.wav"
                }
              ]
            },
            {
              "language": "es-MX",
              "utteranceType": "DIGITS",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "hello",
                  "sayAs": "RAW",
                  "audioFile": "ES-enterBirthDate.wav"
                }
              ]
            }
          ],
          "retryAttempts": [],
          "platformMetaData": {
            "masterCatalogueId": "INBOUND-IDV-DOB",
            "tags": [
              "INBOUND-IDV-DOB"
            ]
          }
        },
    
        {
          "id": "INBOUND-IDV-VERIFY",
          "instructionType": "VERIFY_IDENTITY",
          "verificationType": "MOST_RECENT",
          "description": "Verifying the phone number and birthdate entered. Will use CID number if the number is already recognized.",
          "nextInstructionId": "INBOUND-CONFIRM-NAME",
          "verifyIdentityFailedInstructionId": "INBOUND-IDV-FAIL",
          "answersToVerify": {
            "DATE_OF_BIRTH": "INBOUND-IDV-DOB",
            "PHONE_NUMBER": "INBOUND-IDV-PHONE"
          },
          "platformMetaData": {
            "masterCatalogueId": "INBOUND-IDV-VERIFY",
            "tags": [
              "INBOUND-IDV-VERIFY"
            ]
          }
        },
    
        {
          "id": "INBOUND-IDV-FAIL",
          "skipWhenMemberPhoneNumberRecognized": true,
          "instructionType" : "STATEMENT",
          "description": "Tell member what they entered and that it didn't match.",
          "nextInstructionId": "INBOUND-IDV-PHONE-RETRY",
          "skippedDispositions": [],
          "skippedSexes": [],
          "instructionVariants": [
            {
              "language": "en-US",
              "utteranceType": "NONE",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "Sorry, the phone number...",
                  "sayAs": "RAW",
                  "audioFile": "unknownPhone.wav"
                },
                {
                  "type": "AUDIO",
                  "text": "...does not match the birthdate.",
                  "sayAs": "RAW",
                  "audioFile": "unknownBirthDate.wav"
                },
                {
                  "type": "AUDIO",
                  "text": "...does not match our records. Let’s try again with your keypad.",
                  "sayAs": "RAW",
                  "audioFile": "doesNotMatchRecords.wav"
                }
              ]
            },
            {
              "language": "es-MX",
              "utteranceType": "NONE",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "Sorry, the phone number...",
                  "sayAs": "RAW",
                  "audioFile": "ES-unknownPhone.wav"
                },
                {
                  "type": "AUDIO",
                  "text": "...does not match the birthdate.",
                  "sayAs": "RAW",
                  "audioFile": "ES-unknownBirthDate.wav"
                },
                {
                  "type": "AUDIO",
                  "text": "...does not match our records. Let’s try again with your keypad.",
                  "sayAs": "RAW",
                  "audioFile": "ES-doesNotMatchRecords.wav"
                }
              ]
            }
          ],
          "retryAttempts": [],
          "platformMetaData": {
            "masterCatalogueId": "INBOUND-IDV-FAIL",
            "tags": [
              "INBOUND-IDV-FAIL"
            ]
          }
        },
    
        {
          "id": "INBOUND-IDV-PHONE-RETRY",
          "skipWhenMemberPhoneNumberRecognized": true,
          "instructionType" : "PHONE_NUMBER",
          "description": "INBOUND IDV first retry for PH.",
          "nextInstructionId": "INBOUND-IDV-DOB-RETRY",
          "invalidInputInstructionId": "FAILURE",
          "skippedDispositions": [],
          "skippedSexes": [],
          "bargeable": true,
          "instructionVariants": [
            {
              "language": "en-US",
              "utteranceType": "DIGITS",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                    "type": "AUDIO",
                    "text": "Sorry, the phone number...",
                    "sayAs": "RAW",
                    "audioFile": "unknownPhone.wav"
                  },
                  {
                    "type": "AUDIO",
                    "text": "...does not match our records. Let’s try again with your keypad.",
                    "sayAs": "RAW",
                    "audioFile": "doesNotMatchRecords.wav"
                  },
                {
                  "type": "AUDIO",
                  "text": "Enter your 10-digit phone number with your keypad.",
                  "sayAs": "RAW",
                  "audioFile": "enterPhone.wav"
                }
              ]
            },
            {
              "language": "es-MX",
              "utteranceType": "DIGITS",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                    "type": "AUDIO",
                    "text": "Sorry, the phone number...",
                    "sayAs": "RAW",
                    "audioFile": "ES-unknownPhone.wav"
                  },
                  {
                    "type": "AUDIO",
                    "text": "...does not match our records. Let’s try again with your keypad.",
                    "sayAs": "RAW",
                    "audioFile": "ES-doesNotMatchRecords.wav"
                  },
                {
                  "type": "AUDIO",
                  "text": "Enter your 10-digit phone number with your keypad.",
                  "sayAs": "RAW",
                  "audioFile": "ES-enterPhone.wav"
                }
              ]
            }
          ],
          "retryAttempts": [],
          "platformMetaData": {
            "masterCatalogueId": "INBOUND-IDV-PHONE-RETRY",
            "tags": [
              "INBOUND-IDV-PHONE-RETRY"
            ]
          }
        },
    
        {
          "id": "INBOUND-IDV-DOB-RETRY",
          "instructionType" : "FULL_DATE",
          "description": "INBOUND IDV, first retry date of birth.",
          "nextInstructionId": "INBOUND-IDV-VERIFY-RETRY",
          "invalidInputInstructionId": "FAILURE",
          "skippedDispositions": [],
          "skippedSexes": [],
          "bargeable": true,
          "instructionVariants": [
            {
              "language": "en-US",
              "utteranceType": "DIGITS",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                  {
                    "type": "AUDIO",
                    "text": "...does not match the birthdate.",
                    "sayAs": "RAW",
                    "audioFile": "unknownBirthDate.wav"
                  },
                  {
                    "type": "AUDIO",
                    "text": "...does not match our records. Let’s try again with your keypad.",
                    "sayAs": "RAW",
                    "audioFile": "doesNotMatchRecords.wav"
                  },
                {
                  "type": "AUDIO",
                  "text": "Please enter your birthdate and 4-digit birth year on your keypad. For example, if your birthdate is November 3, 1965, you would enter 11-03-1965.",
                  "sayAs": "RAW",
                  "audioFile": "enterBirthDate.wav"
                }
              ]
            },
            {
              "language": "es-MX",
              "utteranceType": "DIGITS",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                    "type": "AUDIO",
                    "text": "...does not match the birthdate.",
                    "sayAs": "RAW",
                    "audioFile": "ES-unknownBirthDate.wav"
                  },
                  {
                    "type": "AUDIO",
                    "text": "...does not match our records. Let’s try again with your keypad.",
                    "sayAs": "RAW",
                    "audioFile": "ES-doesNotMatchRecords.wav"
                  },
                {
                  "type": "AUDIO",
                  "text": "Please enter your birthdate and 4-digit birth year on your keypad. For example, if your birthdate is November 3, 1965, you would enter 11-03-1965.",
                  "sayAs": "RAW",
                  "audioFile": "ES-enterBirthDate.wav"
                }
              ]
            }
          ],
          "retryAttempts": [],
          "platformMetaData": {
            "masterCatalogueId": "INBOUND-IDV-DOB-RETRY",
            "tags": [
              "INBOUND-IDV-DOB-RETRY"
            ]
          }
        },
    
        {
          "id": "INBOUND-IDV-VERIFY-RETRY",
          "instructionType": "VERIFY_IDENTITY",
          "verificationType": "MOST_RECENT",
          "description": "RETRY - Verifying the phone number and birthdate entered. Will use CID number if the number is already recognized.",
          "nextInstructionId": "INBOUND-CONFIRM-NAME",
          "verifyIdentityFailedInstructionId": "TERMINATE-1",
          "answersToVerify": {
            "DATE_OF_BIRTH": "INBOUND-IDV-DOB-RETRY",
            "PHONE_NUMBER": "INBOUND-IDV-PHONE-RETRY"
          },
          "platformMetaData": {
            "masterCatalogueId": "INBOUND-IDV-VERIFY-RETRY",
            "tags": [
              "INBOUND-IDV-VERIFY-RETRY"
            ]
          }
        },
    
        {
          "id": "INBOUND-CONFIRM-NAME",
          "instructionType" : "SINGLE_SELECT",
          "description": "INBOUND-CONFIRM-NAME",
          "nextInstructionId": "TERMINATE-1",
          "invalidInputInstructionId": "TERMINATE-1",
          "skippedDispositions": [],
          "skippedSexes": [],
          "bargeable": false,
          "instructionVariants": [
            {
              "language": "en-US",
              "utteranceType": "BOTH",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "Is this",
                  "sayAs": "RAW",
                  "audioFile": "confirmName.wav"
                },
                {
                  "personalizationInformationType": "FULL_NAME",
                  "type": "PERSONALIZATION",
                  "sayAs": "RAW"
                }
              ]
            },
            {
              "language": "es-MX",
              "utteranceType": "BOTH",
              "dispositions": [
                "MEMBER"
              ],
              "sexes": [
                "FEMALE",
                "MALE",
                "UNSPECIFIED"
              ],
              "theme": "*",
              "prompts": [
                {
                  "type": "AUDIO",
                  "text": "Is this",
                  "sayAs": "RAW",
                  "audioFile": "ES-confirmName.wav"
                },
                {
                  "personalizationInformationType": "FULL_NAME",
                  "type": "PERSONALIZATION",
                  "sayAs": "RAW"
                }
              ]
            }
          ],
          "expectedResponses": [
            {
              "id": "INBOUND-IDV-NAME-YES",
              "nextInstructionId": "BODY",
              "staticResponseType": "NONE",
              "customDigitUtteranceSet": [
                "1"
              ],
              "customVoiceUtteranceSet": [
                {
                  "language": "en-US",
                  "utteranceSet": [
                    "yes",
                    "yeah",
                    "yup",
                    "yeh",
                    "one",
                    "1"
                  ]
                },
                {
                  "language": "es-MX",
                  "utteranceSet": [
                    "yes",
                    "one",
                    "1",
                    "uno",
                    "see",
                    "si",
                    "c"
                  ]
                }
              ],
              "platformMetaData": {
                "masterCatalogueId": "INBOUND_IDV_PASS",
                "tags": []
              },
              "callUpdateValue": ""
            },
            {
              "id": "INBOUND-IDV-NAME-NO",
              "nextInstructionId": "TERMINATE-1",
              "staticResponseType": "NONE",
              "customDigitUtteranceSet": [
                "3"
              ],
              "customVoiceUtteranceSet": [
                {
                  "language": "en-US",
                  "utteranceSet": [
                    "no",
                    "nope",
                    "nah",
                    "naw",
                    "three",
                    "3"
                  ]
                },
                {
                  "language": "es-MX",
                  "utteranceSet": [
                    "no",
                    "three",
                    "tres"
                  ]
                }
              ],
              "platformMetaData": {
                "masterCatalogueId": "INBOUND_IDV_FAIL",
                "tags": []
              },
              "callUpdateValue": ""
            }
          ],
          "retryAttempts": [
            {
              "bargeable": true,
              "instructionVariants": [
                {
                  "language": "en-US",
                  "utteranceType": "DIGITS",
                  "dispositions": [
                    "MEMBER"
                  ],
                  "sexes": [
                    "FEMALE",
                    "MALE",
                    "UNSPECIFIED"
                  ],
                  "theme": "*",
                  "prompts": [
                    {
                      "type": "AUDIO",
                      "text": "error",
                      "sayAs": "RAW",
                      "audioFile": "error_voice.wav"
                    },
                    {
                      "type": "AUDIO",
                      "text": "is this",
                      "sayAs": "RAW",
                      "audioFile": "confirmName.wav"
                    },
                    {
                      "personalizationInformationType": "FULL_NAME",
                      "type": "PERSONALIZATION",
                      "sayAs": "RAW"
                    },
                    {
                      "type": "AUDIO",
                      "text": "Press 1 for yes or 3 for no",
                      "sayAs": "RAW",
                      "audioFile": "Yes_No_dtmf.wav"
                    }
                  ]
                },
                {
                  "language": "es-MX",
                  "utteranceType": "DIGITS",
                  "dispositions": [
                    "MEMBER"
                  ],
                  "sexes": [
                    "FEMALE",
                    "MALE",
                    "UNSPECIFIED"
                  ],
                  "theme": "*",
                  "prompts": [
                    {
                      "type": "AUDIO",
                      "text": "error",
                      "sayAs": "RAW",
                      "audioFile": "ES-error_voice.wav"
                    },
                    {
                      "type": "AUDIO",
                      "text": "is this",
                      "sayAs": "RAW",
                      "audioFile": "ES-confirmName.wav"
                    },
                    {
                      "personalizationInformationType": "FULL_NAME",
                      "type": "PERSONALIZATION",
                      "sayAs": "RAW"
                    },
                    {
                      "type": "AUDIO",
                      "text": "Press 1 for yes or 3 for no",
                      "sayAs": "RAW",
                      "audioFile": "ES-Yes_No_dtmf.wav"
                    }
                  ]
                }
              ]
            },
            {
              "bargeable": true,
              "instructionVariants": [
                {
                  "language": "en-US",
                  "utteranceType": "DIGITS",
                  "dispositions": [
                    "MEMBER"
                  ],
                  "sexes": [
                    "FEMALE",
                    "MALE",
                    "UNSPECIFIED"
                  ],
                  "theme": "*",
                  "prompts": [
                    {
                      "type": "AUDIO",
                      "text": "error",
                      "sayAs": "RAW",
                      "audioFile": "error_voice.wav"
                    },
                    {
                      "type": "AUDIO",
                      "text": "is this",
                      "sayAs": "RAW",
                      "audioFile": "confirmName.wav"
                    },
                    {
                      "personalizationInformationType": "FULL_NAME",
                      "type": "PERSONALIZATION",
                      "sayAs": "RAW"
                    },
                    {
                      "type": "AUDIO",
                      "text": "Press 1 for yes or 3 for no",
                      "sayAs": "RAW",
                      "audioFile": "Yes_No_dtmf.wav"
                    }
                  ]
                },
                {
                  "language": "es-MX",
                  "utteranceType": "DIGITS",
                  "dispositions": [
                    "MEMBER"
                  ],
                  "sexes": [
                    "FEMALE",
                    "MALE",
                    "UNSPECIFIED"
                  ],
                  "theme": "*",
                  "prompts": [
                    {
                      "type": "AUDIO",
                      "text": "error",
                      "sayAs": "RAW",
                      "audioFile": "ES-error_voice.wav"
                    },
                    {
                      "type": "AUDIO",
                      "text": "is this",
                      "sayAs": "RAW",
                      "audioFile": "ES-confirmName.wav"
                    },
                    {
                      "personalizationInformationType": "FULL_NAME",
                      "type": "PERSONALIZATION",
                      "sayAs": "RAW"
                    },
                    {
                      "type": "AUDIO",
                      "text": "Press 1 for yes or 3 for no",
                      "sayAs": "RAW",
                      "audioFile": "ES-Yes_No_dtmf.wav"
                    }
                  ]
                }
              ]
            }
          ],
          "platformMetaData": {
            "masterCatalogueId": "INBOUND_CONFIRM_NAME",
            "tags": []
          }
        },
        
        {
            "description": "BODY",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_RISK",
                    "prompts": [
                        {
                            "text": "Its normal to feel uncertain about getting screened for cervical cancer.",
                            "audioFile": "body_reduce.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_RISK",
                    "prompts": [
                        {
                            "text": "Its normal to feel uncertain about getting screened for cervical cancer.",
                            "audioFile": "ES-body_reduce.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_CONFIDENCE",
                    "prompts": [
                        {
                            "text": "What can you do to protect yourself from cervical cancer?",
                            "audioFile": "body_fear.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_CONFIDENCE",
                    "prompts": [
                        {
                            "text": "What can you do to protect yourself from cervical cancer?",
                            "audioFile": "ES-body_fear.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_OPTIONS",
                    "prompts": [
                        {
                            "text": "What can you do to protect yourself from cervical cancer?",
                            "audioFile": "body_options.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_OPTIONS",
                    "prompts": [
                        {
                            "text": "What can you do to protect yourself from cervical cancer?",
                            "audioFile": "ES-body_options.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q1",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "BODY",
                "tags": [
                    "BODY"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "BODY"
        },
        {
            "description": "SURVEY-Q1",
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Will you schedule this important health screening?",
                            "audioFile": "mainAsk_voice.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Will you schedule this important health screening?",
                            "audioFile": "ES-mainAsk_voice.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Will you schedule this important health screening?",
                                    "audioFile": "mainAsk_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ES-ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Will you schedule this important health screening?",
                                    "audioFile": "ES-mainAsk_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Will you schedule this important health screening?",
                                    "audioFile": "mainAsk_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ES-ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Will you schedule this important health screening?",
                                    "audioFile": "ES-mainAsk_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A1",
                    "nextInstructionId": "WILL-GET",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "yes",
                                "one"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "see",
                                "c",
                                "uno"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A1",
                        "tags": [
                            "Q1A1",
                            "Survey",
                            "WillGet"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A2",
                    "nextInstructionId": "BARRIERS",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "2"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "no",
                                "two"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "no",
                                "dos"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A2",
                        "tags": [
                            "Q1A2",
                            "Survey",
                            "NoGet"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A3",
                    "nextInstructionId": "HAVE-IT",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "got",
                                "already have",
                                "three"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "tres",
                                "three"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A3",
                        "tags": [
                            "Q1A3",
                            "Survey",
                            "HaveIt"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "instructionType": "SINGLE_SELECT",
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "bargeable": false,
            "id": "SURVEY-Q1"
        },

        {
        "description": "WILL-GET",
        "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
        "instructionVariants": [
            {
                "language": "en-US",
                "utteranceType": "DIGITS",
                "dispositions": [
                    "MEMBER"
                ],
                "sexes": [
                    "MALE",
                    "FEMALE",
                    "UNSPECIFIED"
                ],
                "theme": "*",
                "prompts": [
                    {
                        "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                        "audioFile": "willGet.wav",
                        "sayAs": "RAW",
                        "type": "AUDIO"
                    },
                    {
                        "text": "Would you like to receive an in-home colon cancer screening kit? Please say or press 1 for “Yes” or 2 for “No.”",
                        "audioFile": "kit.wav",
                        "sayAs": "RAW",
                        "type": "AUDIO"
                    }
                ]
            },
            {
                "language": "es-MX",
                "utteranceType": "DIGITS",
                "dispositions": [
                    "MEMBER"
                ],
                "sexes": [
                    "MALE",
                    "FEMALE",
                    "UNSPECIFIED"
                ],
                "theme": "*",
                "prompts": [
                    {
                        "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                        "audioFile": "ES-willGet.wav",
                        "sayAs": "RAW",
                        "type": "AUDIO"
                    },
                    {
                        "text": "Would you like to receive an in-home colon cancer screening kit? Please say or press 1 for “Yes” or 2 for “No.”",
                        "audioFile": "ES-kit.wav",
                        "sayAs": "RAW",
                        "type": "AUDIO"
                    }
                ]
            }
        ],
        "retryAttempts": [
            {
                "bargeable": true,
                "instructionVariants": [
                    {
                        "language": "en-US",
                        "utteranceType": "DIGITS",
                        "dispositions": [
                            "MEMBER"
                        ],
                        "sexes": [
                            "MALE",
                            "FEMALE",
                            "UNSPECIFIED"
                        ],
                        "theme": "*",
                        "prompts": [
                            {
                                "text": "error",
                                "audioFile": "error_voice.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            },
                            {
                                "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                                "audioFile": "willGet.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            },
                            {
                                "text": "Would you like to receive an in-home colon cancer screening kit? Please say or press 1 for “Yes” or 2 for “No.”",
                                "audioFile": "kit.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            }
                        ]
                    },
                    {
                        "language": "es-MX",
                        "utteranceType": "DIGITS",
                        "dispositions": [
                            "MEMBER"
                        ],
                        "sexes": [
                            "MALE",
                            "FEMALE",
                            "UNSPECIFIED"
                        ],
                        "theme": "*",
                        "prompts": [
                            {
                                "text": "error",
                                "audioFile": "ES-error_voice.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            },
                            {
                                "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                                "audioFile": "ES-willGet.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            },
                            {
                                "text": "Would you like to receive an in-home colon cancer screening kit? Please say or press 1 for “Yes” or 2 for “No.”",
                                "audioFile": "ES-kit.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            }
                        ]
                    }
                ]
            },
            {
                "bargeable": true,
                "instructionVariants": [
                    {
                        "language": "en-US",
                        "utteranceType": "DIGITS",
                        "dispositions": [
                            "MEMBER"
                        ],
                        "sexes": [
                            "MALE",
                            "FEMALE",
                            "UNSPECIFIED"
                        ],
                        "theme": "*",
                        "prompts": [
                            {
                                "text": "error",
                                "audioFile": "error_voice.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            },
                            {
                                "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                                "audioFile": "ES-willGet.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            },
                            {
                                "text": "Would you like to receive an in-home colon cancer screening kit? Please say or press 1 for “Yes” or 2 for “No.”",
                                "audioFile": "ES-kit.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            }
                        ]
                    },
                    {
                        "language": "es-MX",
                        "utteranceType": "DIGITS",
                        "dispositions": [
                            "MEMBER"
                        ],
                        "sexes": [
                            "MALE",
                            "FEMALE",
                            "UNSPECIFIED"
                        ],
                        "theme": "*",
                        "prompts": [
                            {
                                "text": "error",
                                "audioFile": "ES-error_voice.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            },
                            {
                                "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                                "audioFile": "ES-willGet.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            },
                            {
                                "text": "Would you like to receive an in-home colon cancer screening kit? Please say or press 1 for “Yes” or 2 for “No.”",
                                "audioFile": "ES-kit.wav",
                                "sayAs": "RAW",
                                "type": "AUDIO"
                            }
                        ]
                    }
                ]
            }
        ],
        "nextInstructionId": "FAILURE",
        "invalidInputInstructionId": "FAILURE",
        "expectedResponses": [
            {
                "id": "Q2A1",
                "nextInstructionId": "YES-KIT",
                "staticResponseType": "NONE",
                "customDigitUtteranceSet": [
                    "1"
                ],
                "customVoiceUtteranceSet": [
                    {
                        "language": "en-US",
                        "utteranceSet": [
                            "yes",
                            "one"
                        ]
                    },
                    {
                        "language": "es-MX",
                        "utteranceSet": [
                            "see",
                            "c",
                            "uno"
                        ]
                    }
                ],
                "platformMetaData": {
                    "masterCatalogueId": "Q2A1",
                    "tags": [
                        "Q2A1",
                        "Survey",
                        "YesKit"
                    ]
                },
                "callUpdateValue": ""
            },
            {
                "id": "Q2A2",
                "nextInstructionId": "NO-KIT",
                "staticResponseType": "NONE",
                "customDigitUtteranceSet": [
                    "2"
                ],
                "customVoiceUtteranceSet": [
                    {
                        "language": "en-US",
                        "utteranceSet": [
                            "no",
                            "two"
                        ]
                    },
                    {
                        "language": "es-MX",
                        "utteranceSet": [
                            "no",
                            "dos"
                        ]
                    }
                ],
                "platformMetaData": {
                    "masterCatalogueId": "Q2A2",
                    "tags": [
                        "Q2A2",
                        "Survey",
                        "NoKit"
                    ]
                },
                "callUpdateValue": ""
            }
        ],
        "instructionType": "SINGLE_SELECT",
        "platformMetaData": {
            "masterCatalogueId": "Q2",
            "tags": [
                "Q2"
            ]
        },
        "skipWhenMemberPhoneNumberRecognized": false,
        "skippedDispositions": [],
        "skippedSexes": [],
        "bargeable": false,
        "id": "WILL-GET"
    },
        {
            "description": "YES-KIT",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                            "audioFile": "yeskit.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                            "audioFile": "ES-yeskit.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "YES-KIT",
                "tags": [
                    "YES-KIT"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "YES-KIT"
        },
        {
            "description": "NO-KIT",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                            "audioFile": "nokit.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Wonderful. Thank you for doing your part to keep yourself healthy.",
                            "audioFile": "ES-nokit.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "NO-KIT",
                "tags": [
                    "NO-KIT"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "NO-KIT"
        },
        {
            "description": "HAVE-IT",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Wonderful! Thank you for doing your part to help yourself be healthy.",
                            "audioFile": "haveit.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Wonderful! Thank you for doing your part to help yourself be healthy.",
                            "audioFile": "ES-haveit.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "HAVE-IT",
                "tags": [
                    "HAVE-IT"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "HAVE-IT"
        },
        {
            "description": "BARRIERS",
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Tell us why you will not be getting tested for cervical cancer this year.",
                            "audioFile": "barriers.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Tell us why you will not be getting tested for cervical cancer this year.",
                            "audioFile": "ES-barriers.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "error_voice.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Tell us why you will not be getting tested for cervical cancer this year.",
                                    "audioFile": "barriers_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ES-error_voice.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Tell us why you will not be getting tested for cervical cancer this year.",
                                    "audioFile": "ES-barriers_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "error_voice.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Tell us why you will not be getting tested for cervical cancer this year.",
                                    "audioFile": "barriers_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ES-error_voice.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Tell us why you will not be getting tested for cervical cancer this year.",
                                    "audioFile": "ES-barriers_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "ERROR-VOICE",
            "expectedResponses": [
                {
                    "id": "Q3A1",
                    "nextInstructionId": "BARRIER-ONE",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "uno"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A1",
                        "tags": [
                            "Q3A1",
                            "Survey",
                            "PrepProcess"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q3A2",
                    "nextInstructionId": "BARRIER-TWO",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "2"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "two"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "dos"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A2",
                        "tags": [
                            "Q3A2",
                            "Survey",
                            "DoctorHasNotRecommended"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q3A3",
                    "nextInstructionId": "BARRIER-THREE",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "tres"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A3",
                        "tags": [
                            "Q3A3",
                            "Survey",
                            "SymptomFree"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q3A4",
                    "nextInstructionId": "BARRIER-FOUR",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "4"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "four"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "cuatro",
                                "four"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A4",
                        "tags": [
                            "Q3A4",
                            "Survey",
                            "Cost"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q3A5",
                    "nextInstructionId": "BARRIER-FIVE",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "5"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "five"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "cinco"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A5",
                        "tags": [
                            "Q3A5",
                            "Survey",
                            "COVID19"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q3A6",
                    "nextInstructionId": "BARRIER-SIX",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "6"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "six"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "seis"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A6",
                        "tags": [
                            "Q3A6",
                            "Survey",
                            "Painful"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q3A7",
                    "nextInstructionId": "BARRIER-SEVEN",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "7"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "seven"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "siete"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A7",
                        "tags": [
                            "Q3A7",
                            "Survey",
                            "None"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "REPEAT",
                    "nextInstructionId": "BARRIERS",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "8"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "eight"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "ocho"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "REPEAT",
                        "tags": [
                            "REPEAT",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "instructionType": "SINGLE_SELECT",
            "platformMetaData": {
                "masterCatalogueId": "Q3",
                "tags": [
                    "Q3"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "bargeable": true,
            "id": "BARRIERS"
        },
        {
            "description": "BARRIER-ONE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier one",
                            "audioFile": "barrier1.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier one",
                            "audioFile": "ES-barrier1.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q4",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "BARRIER-ONE",
                "tags": [
                    "BARRIER-ONE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "BARRIER-ONE"
        },
        {
            "description": "BARRIER-TWO",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier two",
                            "audioFile": "barrier2.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier two",
                            "audioFile": "ES-barrier2.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q4",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "BARRIER-TWO",
                "tags": [
                    "BARRIER-TWO"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "BARRIER-TWO"
        },
        {
            "description": "BARRIER-THREE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier three",
                            "audioFile": "barrier3.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier three",
                            "audioFile": "ES-barrier3.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q4",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "BARRIER-THREE",
                "tags": [
                    "BARRIER-THREE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "BARRIER-THREE"
        },
        {
            "description": "BARRIER-FOUR",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier four",
                            "audioFile": "barrier4.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier four",
                            "audioFile": "ES-barrier4.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q4",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "BARRIER-FOUR",
                "tags": [
                    "BARRIER-FOUR"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "BARRIER-FOUR"
        },
        {
            "description": "BARRIER-FIVE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier five",
                            "audioFile": "barrier5.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier five",
                            "audioFile": "ES-barrier5.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q4",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "BARRIER-FIVE",
                "tags": [
                    "BARRIER-FIVE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "BARRIER-FIVE"
        },
        {
            "description": "BARRIER-SIX",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier six",
                            "audioFile": "barrier6.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier four",
                            "audioFile": "ES-barrier6.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q4",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "BARRIER-SIX",
                "tags": [
                    "BARRIER-SIX"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "BARRIER-SIX"
        },
        {
            "description": "BARRIER-SEVEN",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier seven",
                            "audioFile": "barrier7.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Barrier seven",
                            "audioFile": "ES-barrier7.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q4",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "BARRIER-SIX",
                "tags": [
                    "BARRIER-SEVEN"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "BARRIER-SEVEN"
        },
        {
            "description": "SURVEY-Q4",
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Will you reconsider and get tested for cervical cancer this year?",
                            "audioFile": "reconsider.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Will you reconsider and get tested for cervical cancer this year?",
                            "audioFile": "ES-reconsider.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Will you reconsider and get tested for cervical cancer this year?",
                                    "audioFile": "reconsider.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ES-ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Will you reconsider and get tested for cervical cancer this year?",
                                    "audioFile": "ES-reconsider.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Will you reconsider and get tested for cervical cancer this year?",
                                    "audioFile": "reconsider.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ES-ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Will you reconsider and get tested for cervical cancer this year?",
                                    "audioFile": "ES-reconsider.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "ERROR-VOICE",
            "expectedResponses": [
                {
                    "id": "Q4A1",
                    "nextInstructionId": "WILL-GET",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "yes",
                                "one"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "see",
                                "uno"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q4A1",
                        "tags": [
                            "Q4A1",
                            "Survey",
                            "WillChange"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q4A2",
                    "nextInstructionId": "EXIT-NO",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "2"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "no",
                                "two"
                            ]
                        },
                        {
                            "language": "es-MX",
                            "utteranceSet": [
                                "no",
                                "dos"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q4A2",
                        "tags": [
                            "Q4A2",
                            "Survey",
                            "NoChange"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "instructionType": "SINGLE_SELECT",
            "platformMetaData": {
                "masterCatalogueId": "Q4",
                "tags": [
                    "Q4"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "bargeable": false,
            "id": "SURVEY-Q4"
        },
        {
            "description": "EXIT-NO",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "exit.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "ES-exit.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "EXIT-NO",
                "tags": [
                    "EXIT-NO"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "EXIT-NO"
        },
        {
            "id": "TERMINATE-1",
            "instructionType" : "STATEMENT",
            "description": "TERMINATE-1",
            "nextInstructionId": "THE_END",
            "skippedDispositions": [],
            "skippedSexes": [],
            "instructionVariants": [
              {
                "language": "en-US",
                "utteranceType": "NONE",
                "dispositions": [
                  "MEMBER"
                ],
                "sexes": [
                  "FEMALE",
                  "MALE",
                  "UNSPECIFIED"
                ],
                "theme": "*",
                "prompts": [
                  {
                    "type": "AUDIO",
                    "text": "Hello. This is Healthcare Company.",
                    "sayAs": "RAW",
                    "audioFile": "terminate_auth.wav"
                  }
                ]
              },
              {
                "language": "es-MX",
                "utteranceType": "NONE",
                "dispositions": [
                  "MEMBER"
                ],
                "sexes": [
                  "FEMALE",
                  "MALE",
                  "UNSPECIFIED"
                ],
                "theme": "*",
                "prompts": [
                  {
                    "type": "AUDIO",
                    "text": "Hello. This is Healthcare Company.",
                    "sayAs": "RAW",
                    "audioFile": "ES-terminate_auth.wav"
                  }
                ]
              }
            ],
            "platformMetaData": {
              "masterCatalogueId": "TERMINATE-1",
              "tags": []
            }
          },
        {
            "description": "FAILURE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "I’m sorry, but I am having trouble understanding your responses. Please call us back at <Icario inbound #> 24 hours a day, 7 days a week to hear about an important health screening. If you have any questions about your health plan benefits, please call the Member Services number on the back of your member ID card. Thank you for your time. Goodbye.",
                            "audioFile": "failure.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },               
                {
                    "language": "es-MX",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "I’m sorry, but I am having trouble understanding your responses. Please call us back at <Icario inbound #> 24 hours a day, 7 days a week to hear about an important health screening. If you have any questions about your health plan benefits, please call the Member Services number on the back of your member ID card. Thank you for your time. Goodbye.",
                            "audioFile": "ES-failure.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "platformMetaData": {
                "masterCatalogueId": "FAILURE",
                "tags": [
                    "FAILURE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "skippedDispositions": [],
            "skippedSexes": [],
            "id": "FAILURE"
        },
        {
            "description": "The last instruction",
            "nextInstructionId": "",
            "instructionType": "TERMINAL",
            "platformMetaData": {
                "masterCatalogueId": "THE_END",
                "tags": [
                    "you'reStillHere?",
                    "it'sOver",
                    "goHome...Go"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "THE_END"
        }
    ]
}
    keys = Object.values(callflow["instructions"])
    index = 0
    for(let i = 0; i<keys.length; i++){
        newpair = {"key": index, "category": "master", "text": callflow["instructions"][i]["id"]}
        keyArray.push(newpair)
        index++
    }
    console.log(keyArray)
}

function createSubKeyIndex(){
    for(let i = 0; i<keyArray.length; i++){

    }
}

createMasterKeyIndex()