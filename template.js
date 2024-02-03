const template = [
    {
      templateID: 1001,
      Heading: 'X-RAY - ABDOMEN ERECT',
      name: 'X-RAY - ABDOMEN ERECT',
      content: {
        OBSERVATION:'-- No obvious free air seen under the diaphragm.\n' +
                    '-- The soft tissue outlines of solid abdomiHeadingorgans are normal.\n' +
                    '-- No radio opaque shadow seen.\n' +
                    '-- The bowel gas pattern is non-specific.\n' +
                    '-- Lumbar spine appears normal.\n' +
                    '-- Psoas shadows are normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1002,
      Heading: 'X – RAY - ADENOIDS',
      name: 'X – RAY - ADENOIDS',
      content: {
        OBSERVATION:'-- No obvious free air seen under the diaphragm.\n' +
                    '-- The soft tissue outlines of solid abdomiHeadingorgans are normal.\n' +
                    '-- No radio opaque shadow seen.\n' +
                    '-- The bowel gas pattern is non-specific.\n' +
                    '-- Lumbar spine appears normal.\n' +
                    '-- Psoas shadows are normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1003,
      Heading: 'X-RAY - ANKLE WITH FOOT AP & LATERAL VIEWS',
      name: 'X-RAY - ANKLE WITH FOOT AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- The visualized bones are normal.\n' +
                    '-- Alignment of the bones is normal.\n' +
                    '-- Soft tissues are normal.\n' +
                    '-- Ankle joint appears normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1004,
      Heading: 'X-RAY - ARM AP & LATERAL VIEWS',
      name: 'X-RAY - ARM AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Soft tissues are normal.\n' +
                    '-- No abnormal lytic or sclerotic lesion is seen in the Humerus.\n' +
                    '-- No periosteal reaction is seen.\n' +
                    '-- Elbow joint appears normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1005,
      Heading: 'X-RAY - GREAT TOE AP & LATERAL VEIWS',
      name: 'X-RAY - GREAT TOE AP & LATERAL VEIWS',
      content: {
        OBSERVATION:'-- Soft tissues appear normal.\n' +
                    '-- Visualized bones are normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1006,
      Heading: 'X - RAY - CALCANEUM AP & LATERAL VIEWS',
      name: 'X - RAY - CALCANEUM AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Calcaneum appears normal.\n' +
                    '-- No significant calcaneal spur is seen.\n' +
                    '-- Soft tissues appear normal.',
        IMPRESSION: '\tNo significant abnormality seen. '
      }
    },
    {
      templateID: 1007,
      Heading: 'X - RAY - CERVICAL SPINE AP & LATERAL VIEWS',
      name: 'X - RAY - CERVICAL SPINE AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Vertebral bodies and intervertebral disc spaces appear normal.\n' +
                    '-- Alignment of the vertebrae is normal.\n' +
                    '-- Atlas and axis are normal.\n' +
                    '-- Atlantodental interspace is normal.\n' +
                    '-- Prevertebral soft tissues are normal.',
        IMPRESSION: '-- No significant abnormality noted.\n' +
                    '-- Suggested MRI Cervical spine to rule out disc prolapse / nerve root impingement.'
      }
    },
    {
      templateID: 1008,
      Heading: 'X – RAY – CHEST LATERAL VIEW',
      name: 'X – RAY – CHEST LATERAL VIEW',
      content: {
        OBSERVATION:'-- Cardiac shadow appears normal.\n' +
                    '-- Visualized thoracic vertebral is normal.\n' +
                    '-- Lung fields are clear.\n' +
                    '-- Diaphragmatic domes appear normal.\n' +
                    '-- Sternum appears normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1009,
      Heading: 'X-RAY - CHEST PA VIEW',
      name: 'X-RAY - CHEST PA VIEW',
      content: {
        OBSERVATION:'-- The trachea is central.\n' +
                    '-- The mediastinal Heading and cardiac silhoutte are normal.\n' +
                    '-- Cardiothoracic ratio is normal.\n' +
                    '-- Cardiophrenic and costophrenic angles are normal.\n' +
                    '-- Both hila are normal.\n' +
                    '-- The lung fields are clear.\n' +
                    '-- Bones of the thoracic cage are normal.\n' +
                    '-- Soft tissues of the chest wall are normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1010,
      Heading: 'X - RAY - CLAVICLE',
      name: 'X - RAY - CLAVICLE',
      content: {
        OBSERVATION:'-- No fracture seen.\n' +
                    '-- The shoulder joint and visualized ribs appear normal.\n' +
                    '-- Sternoclavicular joint is normal.\n' +
                    '-- Acromio – clavicular joint is normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1011,
      Heading: 'X – RAY – COCCYX AP & LATERAL VIEWS',
      name: 'X – RAY – COCCYX AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- No obvious fracture is seen.\n' +
                    '-- Visualized bones show no lytic or sclerotic lesion.\n' +
                    '-- Joint spaces are normal.\n' +
                    '-- Alignment is normal.',
        IMPRESSION: '-- No significant abnormality seen.\n' +
                    '-- Suggested MRI coccyx for further evaluation.\n' +
                    '  '
      }
    },
    {
      templateID: 1012,
      Heading: 'X – RAY - DORSAL SPINE AP & LATEERAL VIEWS',
      name: 'X – RAY - DORSAL SPINE AP & LATEERAL VIEWS',
      content: {
        OBSERVATION:'-- Visualized dorsal vertebral bodies appear normal.\n' +
                    '-- No lytic or sclerotic lesion is seen.\n' +
                    '-- Para vertebral soft tissues appear normal.\n' +
                    '-- Visualized parts of the ribs appear normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1013,
      Heading: 'X – RAY - DORSO LUMBAR SPINE AP & LATERAL VIEWS',
      name: 'X – RAY - DORSO LUMBAR SPINE AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Visualized dorsal and lumbar vertebral bodies appear normal.\n' +
                    '-- No lytic or sclerotic lesion is seen.\n' +
                    '-- Para vertebral soft tissues appear normal.\n' +
                    '-- Visualized parts of the ribs appear normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1014,
      Heading: 'X – RAY - ELBOW AP & LATERAL VIEWS',
      name: 'X – RAY - ELBOW AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Visualized bones appear normal. \n' +
                    '-- Joint space appears normal. \n' +
                    '-- Soft tissue appears normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1015,
      Heading: 'X – RAY - FEMUR AP & LATERAL VIEWS',
      name: 'X – RAY - FEMUR AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Visualized femur is normal.  No fracture is seen.\n' +
                    '-- There is no osteolytic or sclerotic lesion seen.\n' +
                    '-- No significant abnormality is seen in the soft tissue.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1016,
      Heading: 'X – RAY - FINGER AP & LATERAL VIEWS',
      name: 'X – RAY - FINGER AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- The bones and joints are normal.\n' +
                    '-- Soft tissues appear normal.\n' +
                    '-- No evidence of fracture is seen.',
        IMPRESSION: '\tNo significant abnormality is seen.'
      }
    },
    {
      templateID: 1017,
      Heading: 'X - RAY - FOOT AP & LATERAL VIEWS',
      name: 'X - RAY - FOOT AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- The visualized bones appear normal.\n' +
                    '-- Visualized joint spaces are normal.\n' +
                    '-- No obvious sclerotic / lytic lesion is seen.\n' +
                    '-- No evidence of fracture.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1018,
      Heading: 'X - RAY – FOREARM AP & LATERAL VIEWS',
      name: 'X - RAY – FOREARM AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- The visualized bones and joints are normal.\n' +
                    '-- No sclerotic or lytic lesion is seen in the bones.\n' +
                    '-- No obvious soft tissue swelling is seen.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1019,
      Heading: 'X – RAY - HAND AP& LATERAL VIEWS',
      name: 'X – RAY - HAND AP& LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Visualized bones are normal.\n' +
                    '-- Soft tissues are normal.\n' +
                    '-- Alignment is normal.\n' +
                    '-- Joint spaces are normal.',
        IMPRESSION: '\tVisualized bones and joints are normal.'
      }
    },
    {
      templateID: 1020,
      Heading: 'X - RAY - HEEL LATERAL VIEW',
      name: 'X - RAY - HEEL LATERAL VIEW',
      content: {
        OBSERVATION:'-- The visualized bones are normal.\n' +
                    '-- Soft tissues are normal.\n' +
                    '-- Ankle joint appears normal.',
        IMPRESSION: '\tNo significant abnormality seen.'
      }
    },
    {
      templateID: 1021,
      Heading: 'X – RAY - HIP AP STANDING VIEW',
      name: 'X – RAY - HIP AP STANDING VIEW',
      content: {
        OBSERVATION:'-- Visualized bones of pelvis are normal.\n' +
                    '-- The hip joint appears normal.\n' +
                    '-- No abnormality is seen in head, neck and visualized parts of femur.\n' +
                    '-- No abnormal radio opaque shadow seen.',
        IMPRESSION: '\tNo significant abnormality noted.'
      }
    },
    {
      templateID: 1022,
      Heading: 'X - RAY - HUMERUS AP & LATERAL VIEWS     ',
      name: 'X - RAY - HUMERUS AP & LATERAL VIEWS     ',
      content: {
        OBSERVATION:'-- Head, shaft and lower end of humerus is normal.\n' +
                    '-- Visualized elbow and shoulder joint appear normal.\n' +
                    '-- Soft tissues appear normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1023,
      Heading: 'X - RAY - BOTH KNEE AP, LATERAL & SUNRISE VIEWS',
      name: 'X - RAY - BOTH KNEE AP, LATERAL & SUNRISE VIEWS',
      content: {
        OBSERVATION:'-- Tibia and fibula are normal.\n' +
                    '-- Knee joint space appears normal on both sides.\n' +
                    '-- Femur and patella appears normal on both sides.  \n' +
                    '-- Alignment is normal.\n' +
                    '-- No obvious abnormality is seen in the soft tissues.\n' +
                    '-- No obvious osteochondral bone defect is visualized.',
        IMPRESSION: '--No significant abnormality is seen.'
      }
    },
    {
      templateID: 1024,
      Heading: 'X - RAY – KNEE AP & LATERAL VIEWS',
      name: 'X - RAY – KNEE AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Knee joint appears normal.\n' +
                    '-- Lower end of the Femur, Patella and Upper ends of the Tibia and Fibula appear normal.  \n' +
                    '-- Alignment is normal.\n' +
                    '-- No obvious abnormality is seen in the soft tissues.',
        IMPRESSION: '-- No significant abnormality seen.\n' +
                    '-- Suggested MRI knee joint for further evaluation.'
      }
    },
    {
      templateID: 1025,
      Heading: 'X-RAY - KUB',
      name: 'X-RAY - KUB',
      content: {
        OBSERVATION:'-- The soft tissue outlines of solid abdomiHeadingorgans are normal.\n' +
                    '-- No radio opaque shadow seen.\n' +
                    '-- The bowel gas pattern is non-specific.\n' +
                    '-- Lumbar spine appears normal.\n' +
                    '-- Psoas shadows are normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1026,
      Heading: 'X – RAY - LEG AP & LATERAL VIEWS',
      name: 'X – RAY - LEG AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- Visualized parts of tibia and fibula appear normal.\n' +
                    '-- The visualized parts of ankle joint appear normal.\n' +
                    '-- Soft tissues are normal.',
        IMPRESSION: '-- No significant abnormality seen.'
      }
    },
    {
      templateID: 1027,
      Heading: 'X-RAY – LUMBAR SPINE AP & LATERAL VIEWS',
      name: 'X-RAY – LUMBAR SPINE AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'-- The vertebrae is normal\n' +
                    '-- The posterior elements are normal.\n' +
                    '-- The alignment is normal.\n' +
                    '-- Visualized intervertebral disc spaces are normal.\n' +
                    '-- Para vertebral soft tissues are normal.\n' +
                    '-- Both sacro-iliac joints are normal.  \n' +
                    '-- No abnormal radio opaque shadow is seen.',
        IMPRESSION: '-- No significant abnormality seen.\n' +
                    '-- Suggested MRI Lumbar spine to rule out disc prolapse / nerve root impingement.  '
      }
    },
    {
      templateID: 1028,
      Heading: 'X-RAY – MAMMOGRAM      SIDE',
      name: 'X-RAY – MAMMOGRAM      SIDE',
      content: {
        OBSERVATION:   '-- The fibroglandular density is normal for age. \n' +
                       '-- Nipple and subareolar tissue are normal. \n' +
                       '-- No retraction or skin thickening is seen.\n' +
                       '-- Subcutaneous tissue and cooper ‘s ligaments are normal.\n' +
                       '-- No evidence of any distortion of the tissues seen. \n' +
                       '-- The pectoralis and retro mammary space appears normal.\n' +
                       '-- No abnormal microcalcification is seen.\n' +
                       '-- Axillary tail is normal.',
        USG_SCREENING: '--No evidence of mass lesion noted.\n' +
                       '--Few axillary lymphnodes with preserved fatty hilum seen.\n' +
                       '--No\tFeatures\tMeasurement    \tClock position\t        Circle\n' +
                       '--1\t\t\t                    ‘o’ clock position \t\n' +
                       '--',
        IMPRESSION:    '--No abnormality in the mammogram.\n' +
                       '--Radiologically benign appearing axillary lymph nodes.',
        NOTE:          '--BI – RADS SCORING KEY\n' +
                       '--O – Needs additioHeadingevaluation; I – Negative II – Benign findings;    III – Probably benign\n' +
                       '--IV – Suspicious abnormality – Biopsy to be considered\n' +
                       '--V – Highly suggestive of maligHeadingy; VI – Known biopsy proven maligHeadingy  '
      }
    },
    {
      templateID: 1029,
      Heading: 'X-RAY – MAMMOGRAM      SIDE',
      name: 'X-RAY – MAMMOGRAM      SIDE',
      content: {
        TECHNIQUE: 'Full field digital mammography of breast was performed in cranio-caudal and medio-lateral oblique views',
        OBSERVATION:  '--The fibroglandular density is normal for age. \n' +
                      '--Nipple and subareolar tissue are normal. \n' +
                      '--No retraction or skin thickening is seen.\n' +
                      '-- Subcutaneous tissue and cooper ‘s ligaments are normal.\n' +
                      '-- No evidence of any distortion of the tissues seen. \n' +
                      '-- The pectoralis and retro mammary space appears normal.\n' +
                      '-- No abnormal microcalcification is seen.\n' +
                      '-- Axillary tail is normal.',
        USG_SCREENING:'--No evidence of mass lesion noted.\n' +
                      '--Few axillary lymphnodes with preserved fatty hilum seen.\n' +
                      '--No Features Measurement Clock position Circle\n' +
                      '-- 1\t  ‘o’ clock position \t',
        IMPRESSION:   '--No abnormality in the mammogram.\n' +
                      '--Radiologically benign appearing axillary lymph nodes.',
        NOTE:         '--BI – RADS SCORING KEY\n' +
                      '-- O – Needs additioHeadingevaluation; I – Negative II – Benign findings;    III – Probably benign\n' +
                      '--IV – Suspicious abnormality – Biopsy to be considered\n' +
                      '--V – Highly suggestive of maligHeadingy; VI – Known biopsy proven maligHeadingy'
      }
    },
    {
      templateID: 1030,
      Heading: 'X-RAY - MANDIBLE AP & LATERAL VIEWS',
      name: 'X-RAY - MANDIBLE AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'--The visualized mandible is normal.\n' +
                    '-- No fracture is evident at present.\n' +
                    '-- Other visualized bones are normal.\n' +
                    '-- No abnormal radio-opaque shadow is seen.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1031,
      Heading: 'X - RAY – MASTOIDS AP & LATERAL VEIWS',
      name: 'X - RAY – MASTOIDS AP & LATERAL VEIWS',
      content: {
        OBSERVATION:'--Mastoid air cells are normal.\n' +
                    '-- Visualized parts of temporal bone appear normal.\n' +
                    '-- ExterHeadingauditory meatus appear normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1032,
      Heading: 'X-RAY - NASAL BONE AP & LATERAL VEIWS',
      name: 'X-RAY - NASAL BONE AP & LATERAL VEIWS',
      content: {
        OBSERVATION:'--Visualized Headingl bones appear normal.\n' +
                    '--There is no fracture or osteolytic lesions seen.\n' +
                    '--Soft tissues appear normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1033,
      Heading: 'X-RAY - NASOPHARYNX',
      name: 'X-RAY - NASOPHARYNX',
      content: {
        OBSERVATION:'--No significant enlargement of the adenoids and tonsils noted.\n' +
                    '--Pretracheal and Prevertebral soft tissues appear normal.\n' +
                    '--Laryngotracheal air column appears normal.\n' +
                    '--Visualized bones appear normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1034,
      Heading: 'X-RAY - NECK AP & LATERAL VIEWS',
      name: 'X-RAY - NECK AP & LATERAL VIEWS',
      content: {
        OBSERVATION:'--Pre tracheal and Pre vertebral soft tissues appear normal.\n' +
                    '--Laryngo tracheal air column appears normal.\n' +
                    '--Visualized bones appear normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1035,
      Heading: 'X-RAY - ORBITS',
      name: 'X-RAY - ORBITS',
      content: {
        OBSERVATION: '\n' +
                    '--The visualized bones appear normal. \n' +
                    '--The visualized paraHeadingl sinuses appear normal.\n' +
                    '--The sinuses appear normal.\n' +
                    '--No obvious radio-opaque foreign body seen within the orbits.',
        IMPRESSION: '--No significant abnormality is seen.'
      }
    },
    {
      templateID: 1036,
      Heading: 'X-RAY - PELVIS AP VIEW',
      name: 'X-RAY - PELVIS AP VIEW',
      content: {
        OBSERVATION:'--Bones of pelvis are normal.\n' +
                    '--Sacroiliac joints are normal.\n' +
                    '--Hip joints appear normal.\n' +
                    '--Head, neck and visualized shaft of the femur appear normal on both sides.\n' +
                    '--No abnormal radio opaque shadow seen.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1037,
      Heading: 'X-RAY - PARANASAL SINUSES',
      name: 'X-RAY - PARANASAL SINUSES',
      content: {
        OBSERVATION:'--Maxillary sinuses are clear.\n' +
                    '--Frontal sinuses are normal.\n' +
                    '--Ethmoid and sphenoid sinuses are normal.\n' +
                    '--The Headingl septum is in midline.\n' +
                    '--The bones are normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1038,
      Heading: 'X-RAY - RIBS AP VEIW',
      name: 'X-RAY - RIBS AP VEIW',
      content: {
        OBSERVATION:'--Ribs are normal on both sides.\n' +
                    '--There is no evidence of fracture (or) osteolytic lesion.\n' +
                    '--Visualized dorsal spines are normal.',
        IMPRESSION: '--No significant abnormality seen'
      }
    },
    {
      templateID: 1039,
      Heading: 'X-RAY - SACRUM AP & LATERAL VIEWS',
      name: 'X-RAY - SACRUM AP & LATERAL VIEWS',
      content: {
        OBSERVATION: '\n' +
                    '--Visualized sacrum and both sacro-iliac joints appear normal.\n' +
                    '--No obvious lytic or sclerotic lesion is seen.\n' +
                    '--The alignment is normal.\n' +
                    '--No abnormal radio opaque shadows are seen.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1040,
      Heading: 'X-RAY - SCAPULA AP & LATERAL VIEWS ',
      name: 'X-RAY - SCAPULA AP & LATERAL VIEWS ',
      content: {
        OBSERVATION: '\n' +
                    '--Visualized bones appear normal.\n' +
                    '--No lytic or sclerotic lesion is noted.\n' +
                    '--Visualized joint space appears normal. ',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1041,
      Heading: 'X-RAY - SELLA ',
      name: 'X-RAY - SELLA ',
      content: {
        OBSERVATION: '\n' +
                    '--The visualized bones appear normal.\n' +
                    '--Anterior and posterior clinoid processes appear normal.\n' +
                    '--Floor of sella is normal.\n' +
                    '--Dorsum sella is normal.\n' +
                    '--No evidence of lysis or sclerosis is seen.\n' +
                    '--The sella size is normal. No erosion is seen.',
        IMPRESSION: '--No significant abnormality noted.'
      }
    },
    {
      templateID: 1042,
      Heading: 'X-RAY - SHOULDER AP & LATERAL VIEWS ',
      name: 'X-RAY - SHOULDER AP & LATERAL VIEWS ',
      content: {
        OBSERVATION: '\n' +
                    '--Head of the humerus and proximal third of the shaft appear normal.\n' +
                    '--Visualized portions of scapula, clavicle and ribs appear normal.\n' +
                    '--No lytic or sclerotic lesion is noted.\n' +
                    '--Joint space appears normal. \n' +
                    '--Soft tissues appear normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1043,
      Heading: 'X-RAY - SKULL AP & LATERAL VIEWS',
      name: 'X-RAY - SKULL AP & LATERAL VIEWS',
      content: {
        OBSERVATION: '\n' +
                    '--The visualized bones appear normal. \n' +
                    '--No evidence of lysis or sclerosis is seen.\n' +
                    '--The vascular markings of the skull bones are normal.\n' +
                    '--The sella size is normal. No erosion is seen.\n' +
                    '--The sinuses appear normal.',
        IMPRESSION: '--Visualized bones are normal.'
      }
    },
    {
      templateID: 104,
      Heading: 'X- RAY - STERNUM LATERAL VIEW',
      name: 'X- RAY - STERNUM LATERAL VIEW',
      content: {
        OBSERVATION: '\n' +
                    '--The manubrium, body & xiphoid process of sternum appear normal.\n' +
                    '--No lytic / sclerotic lesion noted in the sternum.\n' +
                    '--The pre sterHeadingsoft tissue appears normal.\n' +
                    '--The clavicular outline appears normal.',
        IMPRESSION: '--No significant abnormality is seen. '
      }
    },
    {
      templateID: 1045,
      Heading: 'X-RAY - TEMPORO MANDIBULAR JOINTS',
      name: 'X-RAY - TEMPORO MANDIBULAR JOINTS',
      content: {
        OBSERVATION: '\n' +
                    '--The mandibular condyle, the glenoid fossa and the articular tubercle appear normal.\n' +
                    '--The joint space appears normal.',
        IMPRESSION: '--No abnormality is visualized in the bony components of the temporo mandibular joints.'
      }
    },
    {
      templateID: 1046,
      Heading: 'X RAY - THIGH AP & LATERAL VIEWS',
      name: 'X RAY - THIGH AP & LATERAL VIEWS',
      content: {
        OBSERVATION: '\n' +
                    '--Head, neck and upper one third of shaft of left femur appears normal.\n' +
                    '--Hip joint appears normal.\n' +
                    '--Soft tissue of thigh is normal.',
        IMPRESSION: '--No significant abnormality noted.'
      }
    },
    {
      templateID: 1047,
      Heading: 'X-RAY - THUMB AP & LATERAL VIEWS',
      name: 'X-RAY - THUMB AP & LATERAL VIEWS',
      content: {
        OBSERVATION: '\n' +
                    '--The visualized bones are normal.\n' +
                    '--Soft tissues appear normal.\n' +
                    '--Visualized joints appear normal.',
        IMPRESSION: '--No significant abnormality seen.'
      }
    },
    {
      templateID: 1048,
      Heading: 'X-RAY - WRIST AP & LATERAL VEIWS',
      name: 'X-RAY - WRIST AP & LATERAL VEIWS',
      content: {
        OBSERVATION: '\n' +
                    '--Lower end of radius and ulHeadingppear normal.\n' +
                    '--Visualized carpal, metacarpal bones and phalanges appear normal.\n' +
                    '--The joints spaces and alignment are normal.\n' +
                    '--The bones are normal.\n' +
                    '--The soft tissues are normal.',
        IMPRESSION: '--No bony abnormality is seen.'
      }
    },
    {
      templateID: 1049,
      Heading: 'X-RAY ABDOMEN ',
      name: 'X-RAY ABDOMEN ',
      content: {
        OBSERVATION: '\n' +
                    '--No significant air fluid level noted.\n' +
                    '--No free gas under both domes of diaphragm. \n' +
                    '--No evidence of calcification noted.',
        IMPRESSION: '--No Significant abnormality is noted.',
        ADVICE:     '--Please Correlate Clinically  '
      }
    },
    {
      templateID: 1050,
      Heading: 'AditioHeadingfinger',
      name: 'X-RAY HAND WITH WRIST JOINT (AP/OBLIQUE VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--AdditioHeadingfinger seen in 1st middle phalanges bone.\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--No evidence of bony injury.\n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals no significant abnormality.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically  '
      }
    },
    {
      templateID: 1051,
      Heading: 'X RAY LEG BONE (AP/LAT VIEW)',
      name: 'X RAY LEG BONE (AP/LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Amputation seen in distal shaft of tibia,fibula bone.\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals no significant abnormality.\n' +
                    ' ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically  '
      }
    },
    {
      templateID: 1052,
      Heading: 'BARIUM SWALLOW REPORT',
      name: 'BARIUM SWALLOW REPORT',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available',
        OBSERVATION: '\n' +
                    '--Barium passes smoothly through entire oesophagus into stomach.\n' +
                    '--Pharyngeal recesses appear normal. No evidence of filling defect in pyriform fossa & vallecula.\n' +
                    '--Thoracic esophagus appears normal. No evidence of stricture, dilatation, and intralumiHeadingfilling defect noted in esophagus.\n' +
                    '--Gastro-esophageal junction appears normal.  No evidence of gastro-esophageal reflux.\n' +
                    '--No evidence of hiatus hernia.',
        IMPRESSION: '\n' +
                    '--X-RAY FINDINGS ARE SUGGESTIVE OF \n' +
                    '--Normal barium swallow examiHeadingon.',
        ADVICE:     '--Please Correlate Clinically  '
      }
    },
    {
      templateID: 1053,
      Heading: 'BARIUM SWALLOW REPORT',
      name: 'BARIUM SWALLOW REPORT',
      content: {
        OBSERVATION: '\n' +
                    '--Barium passes smoothly through entire oesophagus into stomach.\n' +
                    '--Pharyngeal recesses appear normal. No evidence of filling defect in pyriform fossa & vallecula.\n' +
                    '--Thoracic esophagus appears normal. No evidence of stricture, dilatation, and intralumiHeadingfilling defect noted in esophagus.\n' +
                    '--Gastro-esophageal junction appears normal.  No evidence of gastro-esophageal reflux.\n' +
                    '--No evidence of hiatus hernia.',
        IMPRESSION: '--Normal barium swallow examiHeadingon.',
        ADVICE:     '--Please Correlate Clinically  '
      }
    },
    {
      templateID: 1054,
      Heading: 'bony growth elbow',
      name: 'X-RAY ELBOW JOINT ( LAT  VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bony growth seen around ulHeadingone.\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals no significant abnormality. ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1055,
      Heading: 'bony growth around heel bone',
      name: 'X-RAY ANKLE JOINT ( LAT  VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bony growth seen around heel bone .\n' +
                    '--o evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals no significant abnormality. ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically  '
      }
    },
    {
      templateID: 1056,
      Heading: 'chest bvm hiz radio x',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available',
        OBSERVATION: '\n' +
                    ' --Bilateral bronchovascular markings are prominent.\n' +
                    '--Bilateral basal hazy infiltration.\n' +
                    '--Bilateral …….. hazy radio opaque shadow – consolidation pneumonitis.   Advice : Both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable ',
        IMPRESSION: '',
        ADVICE:     '--Please correlate clinically'
      }
    },
    {
      templateID: 1057,
      Heading: 'chest bvm hiz radio',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bilateral bronchovascular markings are prominent.\n' +
                    '--Bilateral basal hazy infiltration.\n' +
                    '--Bilateral hilar is prominence.\n' +
                    '--Both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '',
        ADVICE:     '--Please correlate clinically'
      }
    },
    {
      templateID: 1058,
      Heading: 'chest hiz',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bilateral basal hazy infiltration.\n' +
                    '--Both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '',
        ADVICE:     '--Please correlate clinically'
      }
    },
    {
      templateID: 1059,
      Heading: 'CHEST X RAY BVM HILA',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bronchovascular markings are prominent. \n' +
                    '--Bilateral hila is prominent.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '\n' +
                    '--XRAY Findings Are Suggestive Of\n' +
                    '--Bronchovascular markings are prominent. \n' +
                    '--Bilateral hila is prominent.',
        ADVICE: 'Please correrlate Clinically'
      }
    },
    {
      templateID: 1060,
      Heading: 'CHEST X RAY bvm',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bronchovascular markings are prominent. \n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '\n' +
                    '--XRAY Findings Are Suggestive Of \n' +
                    '--Bronchovascular markings are prominent.  \n' +
                    '--Otherwise, both lung fields appear clear.',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1061,
      Heading: 'CHEST X RAY FEBRIOTIC',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bilateral bronchovascular markings are prominent.\n' +
                    '--Bilateral basal hazy infiltration.\n' +
                    '--Bilateral apical fibrotic stranding .  \n' +
                    '--Bilateral apical hazy infiltration . \n' +
                    '--Evidence of radiopaque substance seen in both lung.\n' +
                    '--Both lung fields appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '',
        ADVICE:     '--Please correlate clinically'
      }
    },
    {
      templateID: 1062,
      Heading: 'CHEST X RAY MASS LESION',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bilateral basal hazy infiltration.\n' +
                    '--Mass lesion seen in right mid lung.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '',
        ADVICE:     '--Please correlate clinically'
      }
    },
    {
      templateID: 1063,
      Heading: 'CHEST X RAY NORMAL',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '--XRAY FINDINGS ARE SUGGESTIVE OF \n' +
                    '--No Significant abnormality is noted in present Study.  ',
        ADVICE:     '--Please correlate clinically'
      }
    },
    {
      templateID: 1064,
      Heading: 'CHEST X RAY (PA VIEW)',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '\n' +
                    '--XRAY FINDINGS ARE SUGGESTIVE OF \n' +
                    '--No Significant abnormality is noted in present Study.',
        ADVICE:     '--Please correlate clinically'
      }
    },
    {
      templateID: 1065,
      Heading: 'CHEST X RAY PLEURAL',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bilateral bronchovascular markings are prominent.\n' +
                    '--Pneumothorax seen in right lung.\n' +
                    '--Pleural effusion seen in right lung.\n' +
                    '--Both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please correlate clinically'
      }
    },
    {
      templateID: 1066,
      Heading: 'CHEST XRAY ABNORMAL',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Bilateral bronchovascular markings are prominent.\n' +
                    '--Bilateral basal hazy infiltration.\n' +
                    '--Bilateral hilar is prominence.\n' +
                    '--Bilateral pulmonic plethora .\n' +
                    '--Bilateral C.P. angle is blunted  \n' +
                    '--Bilateral …….. hazy radio opaque shadow – consolidation pneumonitis.   Advice : CT Chest will  more informative  \n' +
                    '--Bilateral apical fibrotic stranding .  Advice : CT Chest for Koch’s \n' +
                    '--Bilateral apical hazy infiltration . Advice : CT Chest for Koch’s \n' +
                    '--Bilateral apical cavitatory lesion. Advice : CT Chest for Koch’s\n' +
                    '--Bilateral radio opaque spiculated mass lesion.  Advice : CT Chest \n' +
                    '--Numerous well defined  1-2mm nodules that are uniformly diffuse in distribution are seen in both lungs. – Advice Ct chest for miliary Koch’s\n' +
                    '--Bilateral basal reticular pattern  - Advice chest for ILD.\n' +
                    '--Both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '',
        ADVICE:           '  \n' +
                    '--HRCT Chest Will be more informative  \n' +
                    '--Please correlate clinically'
      }
    },
    {
      templateID: 1067,
      Heading: 'chestx',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        OBSERVATION: '\n' +
                    '--Both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: 'No Significant abnormality is noted.  ',
        ADVICE:     '--Please Correlate Clinically.   '
      }
    },
    {
      templateID: 1068,
      Heading: 'CHEST X RAY (PA VIEW)',
      name: 'CHEST X RAY (PA VIEW)',
      content: {
        OBSERVATION: '\n' +
                    '--Bronchovascular markings are prominent. \n' +
                    '--Otherwise, both lung fields appear clear.\n' +
                    '--Both costo-phrenic angles appear clear.\n' +
                    '--Cardiothoracic ratio is normal. \n' +
                    '--Both domes of diaphragm appear normal.\n' +
                    '--Thoracic soft tissue and skeletal system appear unremarkable.',
        IMPRESSION: '\n' +
                    '--CT FINDINGS ARE SUGGESTIVE OF \n' +
                    '--Bronchovascular markings are prominent.',
        ADVICE:     '--Please Correlate Clinically.   '
      }
    },
    {
      templateID: 1069,
      Heading: 'CSX CERVICAL SPINE(AP / LAT VIEW)',
      name: 'X RAY CERVICAL SPINE(AP / LAT VIEW)',
      content: {
        OBSERVATION: '\n' +
                    '--he vertebral bodies appear normal.\n' +
                    '--The intervertebral disc spaces appear normal.\n' +
                    '--No evidence of collapse, sub-luxation or erosion.\n' +
                    '--Bony cervical canal and interspinal lines appear normal.\n' +
                    '--Pre vertebral soft tissue thickness appears normal.',
        IMPRESSION: 'No Significant abnormality is noted.',
        ADVICE:     '--Please Correlate Clinically.'
      }
    },
    {
      templateID: 1070,
      Heading: 'foreign sign',
      name: 'X–RAY KUB REGION',
      content: {
        OBSERVATION: '\n' +
                    '--Foreign sign seen in small bowel.\n' +
                    '--No evidence of radio- opaque calculus in KUB region. \n' +
                    '--Both psoas shadows appear normal.\n' +
                    '--Underlying bones reveal no abnormality.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1071,
      Heading: 'fracture 2nd finger',
      name: 'X-RAY 2nd FINGER (AP/OBLIQUE VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in 2nd distal phalanges bone.\n' +
                    '--Evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals no significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1072,
      Heading: 'fracture ankle joint',
      name: 'X-RAY ANKLE JOINT (AP/LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in distal end of tibia,fibula bone  .\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--Joint space appears abnormal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals  significant abnormality',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1073,
      Heading: 'fracture calcanium',
      name: 'X-RAY BOTH HEEL (AXIAL LAT VIEW)',
      content: {
        OBSERVATION: '\n' +
                    '--Fracture seen in both calcanium bone.\n' +
                    '--Evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals no significant abnormality',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1074,
      Heading: 'fracture cervical',
      name: 'X RAY CERVICAL SPINE (AP/LATERAL VIEW)',
      content: {
        OBSERVATION: '\n' +
                    '--Fracture seen in 6th cervical bone.\n' +
                    '--The intervertebral disc spaces appear normal.\n' +
                    '--No evidence of collapse, sub-luxation or erosion.\n' +
                    '--Bony cervical canal and interspinal lines appear normal.\n' +
                    '--Pre vertebral soft tissue thickness appears normal.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1075,
      Heading: 'fracture clavicle',
      name: 'X-RAY SHOULDER JOINT WITH CLAVICLE BONE (AP VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available',
        OBSERVATION: '\n' +
                    '--Displace fracture seen in clavicle bone .\n' +
                    '--Joint space appears abnormal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals  significant abnormality. ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1076,
      Heading: 'fracture elbow joint',
      name: 'X-RAY ELBOW JOINT  (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in proximal head of ulHeadingone and distal end of humerus bone.\n' +
                    '--Joint space appears abnormal.\n' +
                    '--Evidence of dislocation seen. \n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow appears abnormal. ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1077,
      Heading: 'fracture elbow metallic',
      name: 'X-RAY ELBOW JOINT  (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in proximal head of ulHeadingone and distal end of humerus bone post operated fixed by metallic rod.\n' +
                    '--Joint space appears abnormal.\n' +
                    '--Evidence of dislocation seen. \n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow appears abnormal.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1078,
      Heading: 'X-RAY KNEE JOINT (AP / LAT VIEW)',
      name: 'X-RAY KNEE JOINT (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in proximal head of ulHeadingone and distal end of humerus bone post operated fixed by metallic rod.\n' +
                    '--Joint space appears abnormal.\n' +
                    '--Evidence of dislocation seen. \n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow appears abnormal.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1079,
      Heading: 'fracture femur metalllic',
      name: 'X-RAY FEMUR (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in mid shaft of femur bone post operated fixed by metallic rod.\n' +
                    '--Knee joint and femora-patellar joint appear normal.\n' +
                    '--Articular facets appear normal.\n' +
                    '--No evidence of erosion or sclerotic changes.\n' +
                    '--No evidence of calcified intraarticular loose body.\n' +
                    '--Soft tissue shadow reveals no significant abnormality.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1080,
      Heading: 'fracture foot metallic',
      name: 'X-RAY FOOT (AP/OBLIQUE VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in 3rd phalanges,metatarsal bone post operated fixed by metallic rod.\n' +
                    '--Evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals no significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1081,
      Heading: 'fracture foot metatarsal',
      name: 'X-RAY FOOT (AP/OBLIQUE VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in 5th metatarsal bone .\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals  significant abnormality.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1082,
      Heading: 'fracture foot phalange',
      name: 'X-RAY FOOT (AP/OBLIQUE VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in 5th proximal phalanges bone .\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals  significant abnormality.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1083,
      Heading: 'fracture forearm',
      name: 'X-RAY FOREARM (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in mid shaft of radius,ulHeadingone .\n' +
                    '--Joint space appears abnormal.\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow appears abnormal. \n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1084,
      Heading: 'fracture forearmm',
      name: 'X-RAY FOREARM (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in mid shaft of radius,ulHeadingone post operated fixed by metallic rod.\n' +
                    '--Joint space appears abnormal.\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow appears abnormal.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1085,
      Heading: 'fracture hand metacarpal',
      name: 'X-RAY HAND WITH WRIST JOINT (AP/OBLIQUE VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in 1st metacarpal bone .\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals  significant abnormality. ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1086,
      Heading: 'fracture hand metallic',
      name: 'X-RAY HAND WITH WRIST JOINT (AP/OBLIQUE VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '--Fracture seen in 5th phalanges bone post operated fixed by metallic rod .\n' +
                    '--No evidence of dislocation seen. \n' +
                    '--Joint space appears normal.\n' +
                    '--No evidence of erosion or osteolytic lesion.\n' +
                    '--Soft tissue shadow reveals  significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1087,
      Heading: 'fracture hand phalanges',
      name: 'X-RAY HAND WITH WRIST JOINT (AP/OBLIQUE VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in 2nd proximal phalanges bone .\n' +
                    '-- No evidence of dislocation seen. \n' +
                    '-- Joint space appears normal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1088,
      Heading: 'fracture hip joint',
      name: 'X-RAY HIP JOINT AP/LAT VIEW ',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in proximal head of femur bone .\n' +
                    '-- Periarticular bones appear normal.\n' +
                    '-- Visualized Sacro-iliac joint appear normal.\n' +
                    '-- No evidence of erosion or sclerotic changes.\n' +
                    '-- Soft tissue shadow reveals no significant abnormality.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1089,
      Heading: 'fracture hip metallic ',
      name: 'X-RAY HIP JOINT AP/LAT VIEW ',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in proximal head of femur bone post operated fixed by metallic rod.\n' +
                    '-- Periarticular bones appear normal.\n' +
                    '-- Visualized Sacro-iliac joint appear normal.\n' +
                    '-- No evidence of erosion or sclerotic changes.\n' +
                    '-- Soft tissue shadow reveals no significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1090,
      Heading: 'fracture hip replace ',
      name: 'X-RAY HIP JOINT AP/LAT VIEW ',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in proximal head of femur bone replaced by artificial hip joint.\n' +
                    '-- Periarticular bones appear normal.\n' +
                    '-- Visualized Sacro-iliac joint appear normal.\n' +
                    '-- No evidence of erosion or sclerotic changes.\n' +
                    '-- Soft tissue shadow reveals no significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1091,
      Heading: 'fracture humerus metallic',
      name: 'X-RAY HUMERUS BONE (AP VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in mid shaft of humerus bone post operated fixed by metallic rod .\n' +
                    '-- Evidence of dislocation seen. \n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1092,
      Heading: 'fracture knee metallic ',
      name: 'X-RAY KNEE JOINT AP/LAT VIEW ',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in distal end of femur bone post operated fixed by metallic rod.\n' +
                    '-- Periarticular bones appear normal.\n' +
                    '-- Visualized Sacro-iliac joint appear normal.\n' +
                    '-- No evidence of erosion or sclerotic changes.\n' +
                    '-- Soft tissue shadow reveals no significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1093,
      Heading: 'fracture knee replace',
      name: 'X-RAY KNEE JOINT (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in distal end of femur,patella and proximal head of tibia bone replaced by artificial knee joint.\n' +
                    '-- Articular facets appear abnormal.\n' +
                    '-- No evidence of calcified intraarticular loose body.\n' +
                    '-- Soft tissue shadow reveals no significant abnormality.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1094,
      Heading: 'Fracture knee with leg bone',
      name: 'X-RAY KNEE JOINT (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in proximal shaft of tibia,fibula bone .\n' +
                    '-- Knee joint and femora-patellar joint appear abnormal.\n' +
                    '-- Articular facets appear abnormal.\n' +
                    '-- No evidence of calcified intraarticular loose body.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality.   ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1095,
      Heading: 'fracture leg bone',
      name: 'X RAY LEG BONE (AP/LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in distal end of tibia fibula bone.\n' +
                    '-- No evidence of dislocation seen. \n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality. ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1096,
      Heading: 'fracture leg metallic',
      name: 'X RAY LEG BONE (AP/LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in mid shaft of tibia and fibula bone post operated by fixed metallic rod.\n' +
                    '-- Evidence of dislocation seen. \n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1097,
      Heading: 'fracture lumber metallic',
      name: 'X-RAY LUMBO-SACRAL SPINE (AP/LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in D11-L1 spine post operated fixed by metallic rod.\n' +
                    '-- Vertebral bodies, pedicles and vertebral appendages appear normal.\n' +
                    '-- Intervertebral disc spaces appear normal. \n' +
                    '-- No evidence of osteolytic or sclerotic lesion noted. \n' +
                    '-- No evidence of spondylolysis or listhesis.\n' +
                    '-- Pre & paravertebral soft tissue shadow appears normal.\n' +
                    '-- Visualized sacro-iliac joint appear normal.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1098,
      Heading: 'fracture Headingl',
      name: 'X RAY NASAL BONE',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in Headingl bone.\n' +
                    '-- Bony Headingl septum is well in mid line.\n' +
                    '-- Visualized soft tissue is normal. \n' +
                    '-- No evidence of any congenital abnormally.',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1099,
      Heading: 'fracture pelvis',
      name: 'X- RAY PELVIS WITH BOTH HIP JOINTS AP VIEW',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in right ischium bone and proximal head of femur bone post operated fixed by metallic rod.\n' +
                    '-- Periarticular bones appear normal.\n' +
                    '-- Both sacro iliac joint appears normal.\n' +
                    '-- No evidence of any osteolytic or sclerotic lesion seen.\n' +
                    '-- Soft tissue shadow appears normal.\n' +
                    '  ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1100,
      Heading: 'fracture shoulder joint scapula',
      name: 'X-RAY SHOULDER WITH SCAPULA BONE (AP VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in scapula bone  .\n' +
                    '-- No evidence of dislocation seen. \n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality. ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1101,
      Heading: 'amputation leg',
      name: 'X RAY LEG BONE (AP/LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available  ',
        OBSERVATION: '\n' +
                    '-- Amputation seen in distal shaft of tibia,fibula bone .\n' +
                    '--  No evidence of dislocation seen. . \n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality. ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1102,
      Heading: 'BARIUM SWALLOW REPORT',
      name: 'BARIUM SWALLOW REPORT',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available  ',
        OBSERVATION: '\n' +
                    '-- Barium passes smoothly through entire oesophagus into stomach.\n' +
                    '--  Pharyngeal recesses appear normal. No evidence of filling defect in pyriform fossa & vallecula. \n' +
                    '-- Thoracic esophagus appears normal. No evidence of stricture, dilatation, and intralumiHeadingfilling defect noted in esophagus..\n' +
                    '-- Gastro-esophageal junction appears normal.\n' +
                    '-- No evidence of gastro-esophageal reflux.No evidence of hiatus hernia ',
        IMPRESSION: 'X-RAY FINDINGS ARE SUGGESTIVE OF->	Normal barium swallow examiHeadingon ',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1103,
      Heading: 'fracture ankle metallic',
      name: 'X-RAY ANKLE JOINT (AP/LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available  ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in distal end of tibia,fibula bone post operated fixed by metallic rod .\n' +
                    '--  No evidence of dislocation seen. \n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1104,
      Heading: 'fracture shoulder joint',
      name: 'X-RAY SHOULDER JOINT WITH HUMERUS BONE (AP VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available  ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in proximal head of humerus bone  .\n' +
                    '-- Evidence of dislocation seen. \n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1105,
      Heading: 'fracture wrist',
      name: 'X-RAY WRIST JOINT  (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available  ',
        OBSERVATION: '\n' +
                    '-- Fracture seen in distal end of radius,ulHeadingone   .\n' +
                    '-- Evidence of dislocation seen. \n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1105,
      Heading: 'fracture wristm',
      name: 'X-RAY WRIST JOINT  (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available  ',
        OBSERVATION: '\n' +
                    '--Fracture seen in distal end of radius bone post operated fixed by metallic rod.\n' +
                    '-- Joint space appears abnormal.\n' +
                    '-- No evidence of dislocation seen.\n' +
                    '-- No evidence of erosion or osteolytic lesion.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
    {
      templateID: 1106,
      Heading: 'fracturer knee with leg bone metallic ',
      name: 'X-RAY KNEE JOINT (AP / LAT VIEW)',
      content: {
        CLINICAL_HISTORY: 'Clinical Details not available  ',
        OBSERVATION: '\n' +
                    '--Fracture seen in proximal shaft of tibia,fibula bone post operated fixed by metallic rod.\n' +
                    '-- Knee joint and femora-patellar joint appear abnormal.\n' +
                    '-- Articular facets appear abnormal.\n' +
                    '-- Evidence of calcified intraarticular loose body.\n' +
                    '-- Soft tissue shadow reveals  significant abnormality ',
        IMPRESSION: '',
        ADVICE:     '--Please Correlate Clinically'
      }
    },
  
  ]
 
  
  const newarry = template;
  
  module.exports = { newarry };
  
