// src/data/data.ts

export type TableData = {
  columns?: string[];
  rows: string[][] | [string, string][];
};

export type Section = {
  id: string;
  title: string;
  body?: string;
  table?: TableData;
  gaps?: string[];
  image?: any;
  subsections?: Section[];
};

export const abbreviationTable = [
  { acronym: 'TIMPs', description: 'Technologies, Innovations and Management Practices' },
  { acronym: 'NARIGP', description: 'National Agricultural and Rural Inclusive Growth Project' },
  { acronym: 'KALRO', description: 'Kenya Agricultural and Livestock Research Organization' },
  { acronym: 'ASALs', description: 'Arid and Semi-Arid Lands' },
  { acronym: 'CSA', description: 'Climate Smart Agriculture' },
  { acronym: 'FFBS', description: 'Farmer Field Business Schools' },
  { acronym: 'FPEAK', description: 'Fresh Produce Exporters Association of Kenya' },
  { acronym: 'FSMS', description: 'Food Safety Management System' },
  { acronym: 'GAP', description: 'Good Agricultural Practices' },
  { acronym: 'GHG', description: 'Green House Gases' },
  { acronym: 'HACCP', description: 'Hazard Analysis Critical Control Points' },
  { acronym: 'IDM', description: 'Integrated Disease Management' },
  { acronym: 'IMM', description: 'Integrated Manure Management' },
  { acronym: 'INRM', description: 'Integrated Natural Resource Management' },
  { acronym: 'IPM', description: 'Integrated Pest Management' },
  { acronym: 'ISFM', description: 'Integrated Soil Fertility management' },
  { acronym: 'IWM', description: 'Integrated Weed Management' },
  { acronym: 'JKUAT', description: 'Jomo Kenyatta University of Agriculture and Technology' },
  { acronym: 'KEFRI', description: 'Kenya Forestry Research Institute' },
  { acronym: 'KEPHIS', description: 'Kenya Plant Health Inspectorate Services' },
  { acronym: 'KIRDI', description: 'Kenya Industria Research Development Institute' },
  { acronym: 'MESPT', description: 'Micro-Enterprises Support Programme Trust' },
  { acronym: 'MoALFC', description: 'Ministry of Agriculture, Livestock, Fisheries and Cooperatives' },
  { acronym: 'NARS', description: 'National Agricultural Research Systems' },
  { acronym: 'NGO', description: 'Non-Governmental Organizations' },
  { acronym: 'NOCD', description: 'Nuts and Oil Directorate' },
  { acronym: 'PCPB', description: 'Pesticide Control Products Board' },
  { acronym: 'ToTs', description: 'Training of Trainers' },
  { acronym: 'VMGs', description: 'Vulnerable and Marginalized Groups' },
];

export const disclaimer = `The information presented in this inventory of Technologies, Innovations and Management Practices (TIMPs) book is for advisory use only. Users of this book should verify site specific details that relate to their agro-climatic zones from their area agricultural extension officers.

© Kenya Agricultural and Livestock Research Organization 2021. All rights reserved. No part of this book may be reproduced, stored in database systems, transcribed in any form or by any means, electronic, mechanical photocopying, recording or otherwise without prior written permission of the publisher.

Published by: Kenya Agricultural and Livestock Research Organization KALRO Secretariat P.O. Box 57811-00200 Nairobi, KENYA Email: directorgeneral@kalro.org Tel. No(s): +254-722206986/733333223`;

export const cashewData: Section[] = [
  // ============================================================
  // 1. DEFINITION OF TERMS AND SUMMARY TABLES
  // ============================================================
  {
    id: '1',
    title: '1. Definition of Terms and Summary Tables',
    subsections: [
      {
        id: '1.1',
        title: '1.1 Definition of Terms',
        body: `Technology: This is an output of a research process which is beneficial to the target clientele (mainly farmers for NARIGP's case), can be commercialized and can be patented under intellectual property rights (IPR) arrangements. It consists of research outputs such as tools, equipment, genetic materials, breeds, farming and herding practices, gathering practices, laboratory techniques, models etc.

Management practice: This is a recommendation on a practice that is considered necessary for a technology to achieve its optimum output. It includes different agronomic practices (seeding rates, fertilizer application rates, spatial arrangements, planting period, land preparation and watering regimes), crop protection for crops and feed rations and disease control for livestock.

Innovation: This is a modification of an existing technology for an entirely different use from the original intended use. (e.g., fireless cooker modified to be used as a hatchery).`,
      },
      {
        id: '1.2',
        title: '1.2 Summary of Inventory of TIMPs in the Coconut Value Chain',
        body: 'The inventory process identify 111 TIMPs comprising 52 technologies 5 innovations and 54 management practices, distributed among the 12 sub- themes, as indicated in the table below.',
        table: {
          columns: ['Sub-Theme', 'Technologies', 'Innovations', 'Management Practices'],
          rows: [
            ['Improved varieties', '3', '0', '0'],
            ['Coconut seed systems', '3', '0', '2'],
            ['Coconut GAP and Food Safety', '0', '0', '2'],
            ['Agronomic management practices', '1', '0', '5'],
            ['Soil Fertility Management', '0', '1', '2'],
            ['Soil and Water Management', '1', '0', '9'],
            ['Crop Health', '5', '3', '16'],
            ['Postharvest management', '2', '0', '3'],
            ['Coconut Value addition', '2', '2', '10'],
            ['Mechanization of production activities', '15', '0', '0'],
            ['Coconut business and Marketing', '0', '0', '8'],
            ['Agricultural Policy', '0', '0', '7'],
            ['Total', '52', '5', '54'],
          ],
        },
      },
    ],
  },

  // ============================================================
  // 2. DETAILED COCONUT VALUE CHAIN TIMPs
  // ============================================================
  {
    id: '2',
    title: '2. Detailed Coconut Value Chain TIMPs',
    subsections: [
      // --------------------------------------------------------
      // 2.1 COCONUT VARIETIES
      // --------------------------------------------------------
      {
        id: '2.1',
        title: '2.1 Coconut Varieties',
        subsections: [
          {
            id: '2.1.1',
            title: '2.1.1 East African Tall',
            table: {
              rows: [
                ['TIMP Name', 'East African Tall'],
                ['Category', 'Technology'],
                ['Problem to be addressed', 'Low yields in coconut and low oil content'],
                ['What is it? (TIMP description)', `East African Tall coconut is a variety which grows best along the Coastal lowlands of about 0-600 m above sea level. It has the following characteristics; green to brown petioles, economic life span of 50 years, enlarged and ball shaped stem at the base, medium to large nuts, produces 12-18 leaves per year, a life span of up to 80 years, age at first fruiting is 5-7 years, high oil content and high nuts yields of up to 140 nuts per year.`],
                ['Justification', 'Yield of coconut varieties is dependent on suitability of the target product and the genetic potential of the variety. EAT has relatively high oil content and a wide range of products (mature coconuts, tender coconut (madafu), brooms, coconut wood, palm wine, coconut thatch, husks, fibre, briquets, tooth picks, door mats and coco peat).'],
                ['Users of TIMP', 'Farmers, Processors, Nursery operators, Traders, Researchers, Extension service providers.'],
                ['Approaches used in dissemination', `• Coconut Innovation Platforms
• Coconut Farmer Field and Business Schools
• On-farm and on-station research trials and demonstrations
• Training workshops, seminars, meetings
• Field days
• Coconut festivals
• Agricultural shows
• MoALFC/Public and Private extension providers
• Farmer research networks
• Farmer to farmer extension
• Mass media – Agricultural programs
• Promotional materials (posters/brochures/leaflets, manuals)
• Digital platforms`],
                ['Critical/essential factors for successful promotion', `• Determination of suitability in non coconut traditional areas
• Research Extension Liason fora
• Positive interaction between Farmers and Processors
• Mechanism for interaction of coconut value chain stakeholders
• Clean planting material availability
• Good Marketing Models and path ways
• County and central government support
• Funding for research`],
                ['Counties where already promoted, if any', 'Kilifi, Kwale, Lamu, Mombasa, Tana River and Taita Taveta'],
                ['Counties where TIMP will be up scaled', 'Kilifi and other suitable areas'],
                ['Challenges in dissemination', `• Lack of a mechanism to facilitate interaction of VC stakeholders
• Inadequate/Poor distribution of planting materials`],
                ['Suggestions for addressing the challenges', `• Establish coconut innovation platforms
• Involve County governments, extension and Nursery operators
• Engagement of wider range of stakeholders
• Promotion of the variety in the suitable areas
• Promote value addition and consumption in local food systems
• Promote marketing models that encourage collective production and marketing`],
                ['Basic costs', 'KES 5000 per acre (40 seedlings per acre spaced at 9m x 9m). This is the cost of purchasing seedlings, which is 13.3 % of the cost of establishing and bringing the crop to yielding.'],
                ['Estimated returns', 'The net present value (NPV) of Coconut was estimated at KES 114820 per acre for nuts, makuti and toddy, and KES 275266 for nuts and makuti. Benefit cost ratio (BCR) was 6.2; the internal rate of return (IRR) was about 54% for nuts and makuti alone, and 108% with toddy production.'],
                ['F: Status of TIMP Readiness', 'Ready for upscaling (1)'],
                ['G: Contacts', 'Institute Director, KALRO-Mtwapa; P.O. Box 16-80109, Mtwapa. E-mail: director.icri@kalro.org, 0202024751.'],
              ],
            },
            gaps: [
              'Research to release more superior coconut varieties',
              'Validation and promotion of the variety in the new target areas of coconut cultivation'
            ],
          },
          {
            id: '2.1.2',
            title: '2.1.2 Dwarf Coconut',
            table: {
              rows: [
                ['TIMP Name', 'Dwarf Coconut'],
                ['Category', 'Technology'],
                ['Problem to be addressed', 'Low yields and quality of coconut water'],
                ['What is it? (TIMP description)', `Dwarf coconut is a variety with petioles and nuts of bright colours of green, yellow, pink and orange, it produces 20-22 leaves per year, has a life span of up to 40 years, age at first fruiting is 3-4 years, economic life span of less than 50 years, stem size and shape are thin, with a cylindrical or tapering base, produces small to medium nut size and has relatively low oil content. Has sweet coconut water (madafu).`],
                ['Justification', 'Valued for its sweet coconut water (madafu) and delicious kernel (flesh) and planted as ornamental.'],
                ['Users of TIMP', 'Farmers, Processors, Nursery operators, Traders, Researchers, Extension service providers.'],
                ['Counties where already promoted, if any', 'Kilifi, Kwale, Lamu, Mombasa, Tana River and Taita Taveta'],
                ['Counties where TIMP will be up scaled', 'All suitable areas including new areas of cultivation such as Kisumu, Busia, Makueni and Tharaka Nithi'],
                ['Basic costs', 'KES 32000 per acre (80 seedlings per acre spaced at 7m x 7m). This is the cost of purchasing seedlings, which is 17.6 % of the cost of establishing and bringing the crop to yielding.'],
                ['F: Status of TIMP Readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.1.3',
            title: '2.1.3 Hybrid Coconut',
            table: {
              rows: [
                ['TIMP Name', 'Hybrid Coconut'],
                ['Category', 'Technology'],
                ['Problem to be addressed', 'Low yields in coconut'],
                ['What is it? (TIMP description)', `Hybrid Coconut is a newly introduced variety under evaluation. Has petioles and nuts of bright colours of green, yellow, pink, orange, produces 20-22 leaves per year, has a life span of Up to 50 years, age at first fruiting is 2.5-3 years, economic life span of less than 50 years, stem size and shape are thin, with a cylindrical or tapering base, medium to large nut size and relatively high oil content. Yields of up to 300 nuts per year.`],
                ['Justification', 'Yield of coconut varieties is dependent on suitability of the target zones and the genetic potential of the variety.'],
                ['Counties where TIMP will be up scaled', 'All suitable areas including new areas of cultivation such as Kisumu, Busia, Makueni and Tharaka Nithi'],
                ['Basic costs', 'KES 40000 per acre (80 seedlings per acre spaced at 7m x 7m). This is the cost of purchasing seedlings, which is 17.6 % of the cost of establishing and bringing the crop to yielding.'],
                ['F: Status of TIMP Readiness', '2-requires validation; 3-requires further research'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.2 COCONUT SEED SYSTEMS
      // --------------------------------------------------------
      {
        id: '2.2',
        title: '2.2 Coconut Seed Systems',
        subsections: [
          {
            id: '2.2.1',
            title: '2.2.1 Direct Planting',
            table: {
              rows: [
                ['TIMP Name', 'Direct Planting'],
                ['Category', 'Management Practice'],
                ['Problem to be addressed', 'Low uptake of seedlings due to transplanting shock.'],
                ['What is it? (TIMP description)', 'Quality seeds selected from elite mother plants are planted in well dug planting holes from where they germinate and grow, without need for further transplanting.'],
                ['Justification', 'This method of planting guarantees high growth vigour in the initial development stages of the coconut.'],
                ['Counties where already promoted, if any', 'Kilifi, Kwale, Lamu and Taita-Taveta'],
                ['Counties where TIMP will be up scaled', 'Kwale, Mombasa, Kilifi, Tana-River, Lamu, Taita-Taveta, Tharaka Nithi, Lake Basin of Kisumu, Baringo, Busia, Siaya, Migori.'],
                ['Basic costs', 'KES 2000 per acre for EAT coconut'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.2.2',
            title: '2.2.2 Coconut Nursery establishment',
            table: {
              rows: [
                ['TIMP Name', 'Coconut Nursery establishment'],
                ['Category', 'Management Practice'],
                ['Problem to be addressed', 'Unavailability of quality planting materials'],
                ['What is it? (TIMP description)', 'Raising of high quality coconut seedlings in nurseries under high level management until they attain the transplanting stage.'],
                ['Justification', 'Coconut nurseries are a reliable source of quality and certified planting materials for orchard establishment, Good management practices and monitoring of the seedlings ensures uniformity and availability of planting materials.'],
                ['Counties where already promoted, if any', 'Kilifi, Kwale, Lamu and Taita-Taveta'],
                ['Basic costs', 'KES 100 per seedling (EAT). KES 400 per (Dwarf coconut)'],
                ['Estimated returns', 'KES 60,000 per 1,000 seedlings (EAT). KES 300,000 per 1000 seedlings (Dwarf coconut)'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.2.3',
            title: '2.2.3 Seed selection',
            table: {
              rows: [
                ['TIMP Name', 'Seed selection'],
                ['Category', 'Technology'],
                ['Problem to be addressed', 'Poor germination percentage'],
                ['What is it? (TIMP description)', 'This involves choosing of mature nuts for seed from a desired coconut mother plant, free from pests and diseases'],
                ['Justification', 'Choosing of nuts for seedling production ensure uniformity and quality planting material from known mother plants for increased yields'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.2.4',
            title: '2.2.4 Seed pairing',
            table: {
              rows: [
                ['TIMP Name', 'Seed pairing'],
                ['Category', 'Technology'],
                ['Problem to be addressed', 'Low germination of coconut seed nuts when seeded directly in normal soil media.'],
                ['What is it? (TIMP description)', 'This involves identification of the point of emergency of the shoot and the position of the roots. To hasten germination, slice the seed nut a bit and remove part of the husk on one end at the side of the three eyes. Soaking of the seed nut in water for two days to weaken the outer coat.'],
                ['Justification', 'Coconut usually germinates in 3-4 months, this technology reduce to 2-3'],
              ],
            },
          },
          {
            id: '2.2.5',
            title: '2.2.5 Seed placement',
            table: {
              rows: [
                ['TIMP Name', 'Seed placement'],
                ['Category', 'Technology'],
                ['Problem to be addressed', 'Delayed sprouting'],
                ['What is it? (TIMP description)', 'This is Laying the nuts end to end or side by side in the trench, at 45° angle with the broadest side of the nut at the bottom; and the front end (with eyes) lower such that the water wets the shoot'],
                ['Justification', 'Placing of the nuts at 45° angle ensures equal distribution of the water inside the nut and enhance precocity.'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.3 GOOD AGRICULTURAL PRACTICES AND FOOD SAFETY
      // --------------------------------------------------------
      {
        id: '2.3',
        title: '2.3 Good Agricultural Practices and Food Safety Management Systems',
        subsections: [
          {
            id: '2.3.1',
            title: '2.3.1 Food Safety Management System (HACCP)',
            table: {
              rows: [
                ['TIMP Name', 'Food Safety Management System: Hazard Analysis Critical Control Points Plan for Coconut Value Chain in Kenya'],
                ['Category', 'Management Practice'],
                ['Problem to be addressed', 'The presence of chemical and biological hazards in the Coconut value chain in Kenya have a direct effect on consumers’ health...'],
                ['What is it? (TIMP description)', 'Food safety management system (FSMS) through HACCP in Coconut is a system of food safety monitoring and control based on the systematic identification and assessment of various hazards.'],
                ['F: Status of TIMP Readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.3.2',
            title: '2.3.2 Good Agricultural Practices for Coconut',
            table: {
              rows: [
                ['TIMP Name', 'Good Agricultural Practices for Coconut'],
                ['Category', 'Management practice'],
                ['Problem to be addressed', 'The increased trade from demand for more food with the increased global population has also led to unscrupulous growers and traders using unsafe methods...'],
                ['What is it? (TIMP description)', 'It is a systematic process of implementing a standardized production system globally designed to reassure consumers about how food is produced on the farm...'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.4 AGRONOMIC MANAGEMENT PRACTICES
      // --------------------------------------------------------
      {
        id: '2.4',
        title: '2.4 Agronomic Management Practices',
        subsections: [
          {
            id: '2.4.1',
            title: '2.4.1 Site Selection for orchard establishment',
            table: {
              rows: [
                ['TIMP Name', 'Site Selection for orchard establishment'],
                ['Category', 'Management Practice'],
                ['Problem to be addressed', 'Limited suitable areas for growing of coconut'],
                ['What is it? (TIMP description)', 'Selection of suitable areas for coconut production. Coconut grows well in equatorial climate with abundant sunlight, mean temperature of 27°C and high humidity of at least 70-80%. Ideal altitude for coconut growing is 0-600 metres above sea level...'],
                ['Basic costs', 'KES 15,228 per acre 45.8.0%'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.4.2',
            title: '2.4.2 Land Preparation',
            table: {
              rows: [
                ['TIMP Name', 'Land Preparation'],
                ['Category', 'Technology'],
                ['Problem to be addressed', 'Inappropriate land preparation practices'],
                ['What is it? (TIMP description)', 'Appropriate land preparation and land clearing. The initial land preparation is done during the dry season by either ploughing, harrowing, use of herbicides or methods stipulated in conservation agriculture...'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.4.3',
            title: '2.4.3 Spacing and orchard establishment',
            table: {
              rows: [
                ['TIMP Name', 'Spacing and orchard establishment'],
                ['Category', 'Management Practice'],
                ['Problem to be addressed', 'Incorrect spacing and improper planting methods leads to poor yields and low nut quality...'],
                ['What is it? (TIMP description)', 'An optimum spacing of 7.5m x 7.5m (for pure stand) and a minimum of 10 x 10 m with intercrops is recommended.'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.4.4',
            title: '2.4.4 Intercropping',
            table: {
              rows: [
                ['TIMP Name', 'Intercropping'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'Intercropping of coconut with annuals when young and also with trees, such as coffee, grieve lea among others as long they are well spaced.'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
          {
            id: '2.4.5',
            title: '2.4.5 Coconut Crown Cleaning',
            table: {
              rows: [
                ['TIMP Name', 'Coconut Crown Cleaning'],
                ['Category', 'Management Practice'],
                ['Problem to be addressed', 'Old, weak, damaged fronds, aborted nuts, debris and excess fibre can act as reservoir for insect pests...'],
                ['What is it? (TIMP description)', 'Routine cleaning of coconut crowns through trimming removal of old, weak, damaged fronds, removal of debris, aborted nuts and excess fibre.'],
                ['F: Status of TIMP readiness', 'Requires validation'],
              ],
            },
          },
          {
            id: '2.4.6',
            title: '2.4.6 Fertilizer Application',
            table: {
              rows: [
                ['TIMP Name', 'Fertilizer Application'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'Appropriate application of fertilizer or manure. Application of fertilizer is done just before the rains. The quantities applied is per the soil analysis recommendations...'],
                ['F: Status of TIMP readiness', 'Ready for upscaling'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.5 SOIL FERTILITY MANAGEMENT
      // --------------------------------------------------------
      {
        id: '2.5',
        title: '2.5 Soil Fertility Management',
        subsections: [
          {
            id: '2.5.1',
            title: '2.5.1 Integrated Manure Management',
            table: {
              rows: [
                ['TIMP Name', 'Integrated Manure Management'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Integrated Manure Management (IMM) is the optimal, site-specific handling of livestock manure starting at collection, treatment, storage and its application into soils.'],
                ['F: Status of TIMP readiness', 'Ready for up-scaling'],
              ],
            },
          },
          {
            id: '2.5.2',
            title: '2.5.2 Integrated Soil Fertility Management',
            table: {
              rows: [
                ['TIMP Name', 'Integrated Soil Fertility Management'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'A set of soil fertility management practices that include the use of fertilizers, locally available organic inputs and improved seed combined to adapt practices to local conditions...'],
                ['F: Status of TIMP readiness', 'Ready for up-scaling'],
              ],
            },
          },
          {
            id: '2.5.3',
            title: '2.5.3 Rapid Soil Testing',
            table: {
              rows: [
                ['TIMP Name', 'Rapid Soil Testing'],
                ['Category', 'Innovation'],
                ['What is it? (TIMP description)', 'This is a dry method for soil testing using simplicity of light—the interaction of electromagnetic radiation with matter to characterize biochemical composition of a soil and/or plant tissue.'],
                ['F: Status of TIMP readiness', 'Requires validation'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.6 SOIL AND WATER MANAGEMENT
      // --------------------------------------------------------
      {
        id: '2.6',
        title: '2.6 Soil and Water Management',
        subsections: [
          {
            id: '2.6.1',
            title: '2.6.1 Grass strips',
            table: {
              rows: [
                ['TIMP Name', 'Grass strips'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Dense strips of grass planted up to a meter wide, along a contour...'],
              ],
            },
          },
          {
            id: '2.6.2',
            title: '2.6.2 Zai Pits',
            table: {
              rows: [
                ['TIMP Name', 'Zai Pits'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Zai Pits are small planting pits typically measuring 60-90 cm in width, 20-30 cm deep and spaced 10m apart for coconut production...'],
              ],
            },
          },
          {
            id: '2.6.3',
            title: '2.6.3 Retention ditches',
            table: {
              rows: [
                ['TIMP Name', 'Retention ditches'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'Retention ditches are trenches designed to catch and retain incoming runoff and hold it until it infiltrates into the ground.'],
              ],
            },
          },
          {
            id: '2.6.4',
            title: '2.6.4 Rain water harvesting systems (water pond)',
            table: {
              rows: [
                ['TIMP Name', 'Rain water harvesting systems (water pond)'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Rain water harvesting is a technique of collection and storage of rainwater into natural reservoirs or tanks, or the infiltration of surface water into subsurface aquifers...'],
              ],
            },
          },
          {
            id: '2.6.5',
            title: '2.6.5 Mulching',
            table: {
              rows: [
                ['TIMP Name', 'Mulching'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'The practice of covering the soil/ground with natural materials such as coconut husks, straw, dead leaves and compost to make more favourable conditions for plant growth...'],
              ],
            },
          },
          {
            id: '2.6.6',
            title: '2.6.6 Green Legume cover crop',
            table: {
              rows: [
                ['TIMP Name', 'Green Legume cover crop'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'Cover cropping is the practice of growing leguminous plants to offer the soil protection against degradation...'],
              ],
            },
          },
          {
            id: '2.6.7',
            title: '2.6.7 Coconut Intercropping',
            table: {
              rows: [
                ['TIMP Name', 'Coconut Intercropping'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Intercropping is a multiple cropping practice involving growing two or more crops in together...'],
              ],
            },
          },
          {
            id: '2.6.8',
            title: '2.6.8 Conservation Agriculture',
            table: {
              rows: [
                ['TIMP Name', 'Conservation Agriculture'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'Conservation agriculture is a set of management practice that minimizes the disturbance of soil structure, conserves soil moisture and enhances soil biodiversity...'],
              ],
            },
          },
          {
            id: '2.6.9',
            title: '2.6.9 Coconuts and Agroforestry',
            table: {
              rows: [
                ['TIMP Name', 'Coconuts and Agroforestry'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'Agroforestry is a land use management system in which trees or shrubs are grown around or among crops or pasturelands...'],
              ],
            },
          },
          {
            id: '2.6.10',
            title: '2.6.10 Drip irrigation systems for small scale farmers',
            table: {
              rows: [
                ['TIMP Name', 'Drip irrigation systems for small scale farmers'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Supplementation of water in crop production systems that allows the optimal usage of the limited water resource by dripping water slowly into the crop roots at low pressure...'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.7 CROP HEALTH INTEGRATED MANAGEMENT OF PESTS
      // --------------------------------------------------------
      {
        id: '2.7',
        title: '2.7 Crop Health Integrated Management of Pests',
        subsections: [
          {
            id: '2.7.1',
            title: '2.7.1 Integrated Management of Rhinoceros beetle',
            table: {
              rows: [
                ['TIMP Name', 'Integrated Management of Rhinoceros beetle in Coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Management of Rhinoceros beetle damage through Field hygiene, splitting and burning old coconut trunks and keeping field clear of refuse and trash. Trapping the beetle using a pheromone as an attractant.'],
              ],
            },
          },
          {
            id: '2.7.2',
            title: '2.7.2 Integrated management of Termites',
            table: {
              rows: [
                ['TIMP Name', 'Integrated management of Termites (Coptotermes formosanus) in Coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Help termite enemies/ predators (birds, insect predators) to feed on the insects. Traditional methods for controlling termites - use of repellent plants such as neem seeds and leaves as mulch...'],
              ],
            },
          },
          {
            id: '2.7.3',
            title: '2.7.3 Integrated Management of Corried bug',
            table: {
              rows: [
                ['TIMP Name', 'Integrated Management of Corried bug (Pseudotheraptus wayi) in coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Biological and chemical control of Corried bug. Biological: Red weaver ants “Majimoto” are natural predators. Encourage predators by intercropping coconut with citrus...'],
              ],
            },
          },
          {
            id: '2.7.4',
            title: '2.7.4 Integrated management Mealybugs',
            table: {
              rows: [
                ['TIMP Name', 'Integrated management Mealybugs in Coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Conservation of Mealybugs natural enemies. Mealybugs are usually controlled by a wide range of natural enemies. However, use of pesticides may kill these natural enemies leading to mealybug outbreaks.'],
              ],
            },
          },
          {
            id: '2.7.5',
            title: '2.7.5 Integrated management of coconut scale',
            table: {
              rows: [
                ['TIMP Name', 'Integrated management of coconut scale (Aspidiotus destructor) in Coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Management of coconut scale through: Conservation of natural enemies...'],
              ],
            },
          },
          {
            id: '2.7.6',
            title: '2.7.6 Integrated Pest Management of African palm weevils',
            table: {
              rows: [
                ['TIMP Name', 'Integrated Pest Management of African palm weevils (Rhynchophorus phoenicis) in Coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Control for African palm weevil is preventative, using cultural and sanitary methods'],
              ],
            },
          },
          {
            id: '2.7.7',
            title: '2.7.7 Integrated Management of Bole rot disease',
            table: {
              rows: [
                ['TIMP Name', 'Integrated Management of Bole rot disease (Marasmielus infescocophilus) in Coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Destroying of affected trees by burning. Cultural practices such as: selection of seedlings in nurseries and subsequent transplanting should be done as early as possible...'],
              ],
            },
          },
          {
            id: '2.7.8',
            title: '2.7.8 Integrated pest management Lethal Yellowing Disease',
            table: {
              rows: [
                ['TIMP Name', 'Integrated pest management Lethal Yellowing Disease (Phytoplasma) in Coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'An integrated pest management of Lethal Yellowing Disease. No known control measures...'],
              ],
            },
          },
          {
            id: '2.7.9',
            title: '2.7.9 Integrated pest management of Bud rot disease',
            table: {
              rows: [
                ['TIMP Name', 'Integrated pest management of Bud rot disease (Phytophthora palmivora) in Coconut'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'An integrated pest management of Bud rot disease. Cultural control: Adopt proper spacing and avoid over-crowding in bud rot prone gardens...'],
              ],
            },
          },
          {
            id: '2.7.10',
            title: '2.7.10 Integrated management of Eriophyid mite',
            table: {
              rows: [
                ['TIMP Name', 'Integrated management of Eriophyid mite in coconut orchards'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'An integrated management of Eriophyid mite in coconut orchards. Chemicals and biological control...'],
              ],
            },
          },
          {
            id: '2.7.11',
            title: '2.7.11 Integrated Management of Leaf rot',
            table: {
              rows: [
                ['TIMP Name', 'Integrated Management of Leaf rot'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'An integrated management of Leaf rot in coconut'],
              ],
            },
          },
          {
            id: '2.7.12',
            title: '2.7.12 Coconut Integrated Weed Management',
            table: {
              rows: [
                ['TIMP Name', 'Coconut Integrated Weed Management'],
                ['Category', 'Innovation'],
                ['What is it? (TIMP description)', 'Integrated Weed Management (IWM) is the use of two or more appropriate approaches to manage weeds including: preventive, planting in a weed free prepared land, use of mulch...'],
              ],
            },
          },
          {
            id: '2.7.13',
            title: '2.7.13 Coconut Intercropping System',
            table: {
              rows: [
                ['TIMP Name', 'Coconut Intercropping System'],
                ['Category', 'Innovation'],
                ['What is it? (TIMP description)', 'Growing of two or more crops in a field at the same time, as a tool to reduce the weed area and enhance production and to obtain efficient land use...'],
              ],
            },
          },
          {
            id: '2.7.14',
            title: '2.7.14 Cover cropping for Coconut weed management',
            table: {
              rows: [
                ['TIMP Name', 'Cover cropping for Coconut weed management'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is a technology where specific selected crops are grown to produce biomass/canopy to cover soil, act as physical barriers, and cut off light for weed seedlings growth...'],
              ],
            },
          },
          {
            id: '2.7.15',
            title: '2.7.15 Mulching',
            table: {
              rows: [
                ['TIMP Name', 'Mulching'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The practice of managing weeds using natural or synthetic materials to cover the soil/ground...'],
              ],
            },
          },
          {
            id: '2.7.16',
            title: '2.7.16 Herbicide (chemical) Weed Control',
            table: {
              rows: [
                ['TIMP Name', 'Herbicide (chemical) Weed Control'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Chemical weed control refers to any technique that involves the application of herbicide to weeds or soil to control the germination and growth of the weed species...'],
              ],
            },
          },
          {
            id: '2.7.17',
            title: '2.7.17 Rapid Response to Invasive weed species',
            table: {
              rows: [
                ['TIMP Name', 'Rapid Response to Invasive weed species'],
                ['Category', 'Innovation'],
                ['What is it? (TIMP description)', 'This is an early detection and rapid response precise method where prevention, technologies, innovations or management practices of weed control are applied...'],
              ],
            },
          },
          {
            id: '2.7.18',
            title: '2.7.18 Solarisation Bed for Weed Control',
            table: {
              rows: [
                ['TIMP Name', 'Solarisation Bed for Weed Control'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Solarisation is a method where you use transparent polythene films and increase soil temperatures by 10 °C or more than atmospheric to kill weed seeds and seedlings...'],
              ],
            },
          },
          {
            id: '2.7.19',
            title: '2.7.19 Stale seed bed for Weed Control',
            table: {
              rows: [
                ['TIMP Name', 'Stale seed bed for Weed Control'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Stale seed bed “false” is where seeds are allowed to germinate by rainfall or wetting and killing them (1-2 flushes of the weeds) before sowing the Clean certified Coconut variety seedlings...'],
              ],
            },
          },
          {
            id: '2.7.20',
            title: '2.7.20 Transplanting Coconut for weed control',
            table: {
              rows: [
                ['TIMP Name', 'Transplanting Coconut for weed control'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'Proper transplanting of coconut. The nursery is prepared during the dry season when there is less work in the fields...'],
              ],
            },
          },
          {
            id: '2.7.21',
            title: '2.7.21 Mechanical weeding',
            table: {
              rows: [
                ['TIMP Name', 'Mechanical weeding'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'Using of tools to get a clean coconut field free of weeds. Plant weed free transplant/or certified seeds into a weed free field...'],
              ],
            },
          },
          {
            id: '2.7.22',
            title: '2.7.22 Crop Rotation in Coconut',
            table: {
              rows: [
                ['TIMP Name', 'Crop Rotation in Coconut'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'This is a planned sequence of crops growing same field year after year organized for a long term weed management...'],
              ],
            },
          },
          {
            id: '2.7.23',
            title: '2.7.23 Mowing to control weeds in Coconut',
            table: {
              rows: [
                ['TIMP Name', 'Mowing to control weeds in Coconut'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'This is a planned sequence of mowing the coconut fields to control weeds and leaving the crop residue on the field to decompose and rot there covering soil...'],
              ],
            },
          },
          {
            id: '2.7.24',
            title: '2.7.24 Biological Control in Coconut',
            table: {
              rows: [
                ['TIMP Name', 'Biological Control in Coconut'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'This is a planned sequence of grazing of goats in coconut fields field year after year organized for a long term weed management...'],
              ],
            },
          },
          {
            id: '2.7.25',
            title: '2.7.25 Safe Use of herbicides in Coconut cropping systems',
            table: {
              rows: [
                ['TIMP Name', 'Safe Use of herbicides in Coconut cropping systems'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Safe handling and use of herbicides right from transportation from the agro-dealers to storage in their houses, mixing procedures and their application in the field...'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.8 HARVEST AND POSTHARVEST MANAGEMENT
      // --------------------------------------------------------
      {
        id: '2.8',
        title: '2.8 Harvest and Postharvest Management',
        subsections: [
          {
            id: '2.8.1',
            title: '2.8.1 Maturity indices',
            table: {
              rows: [
                ['TIMP Name', 'Maturity indices'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'This is a management practice involving determination of the following correct maturity indices. Coconut matures in 350 to 375 days after appearance of the inflorescence...'],
              ],
            },
          },
          {
            id: '2.8.2',
            title: '2.8.2 Coconut harvesting',
            table: {
              rows: [
                ['TIMP Name', 'Coconut harvesting'],
                ['Category', 'Management Practice'],
                ['What is it? (TIMP description)', 'This is a management practice involving determination of harvesting procedure. Harvesting methods: Climbing, Climbing robot, Power operated harvesting tool, Climbing cycle / equipment, Use of trained monkeys'],
              ],
            },
          },
          {
            id: '2.8.3',
            title: '2.8.3 De-husking and de-husking machine',
            table: {
              rows: [
                ['TIMP Name', 'De-husking and de-husking machine'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Coconut de-husking involves removal of the husk from the coconut. De-husking of nuts should be done using a pointed iron bar, a strong and pointed stick, or a de-husking machine...'],
              ],
            },
          },
          {
            id: '2.8.4',
            title: '2.8.4 Drying of copra',
            table: {
              rows: [
                ['TIMP Name', 'Drying of copra'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is a technology for reducing the moisture content of copra from 50% to the optimum moisture content of 5-6%. Drying of the copra should take place within 48 hours of harvesting...'],
              ],
            },
          },
          {
            id: '2.8.5',
            title: '2.8.5 Copra grading',
            table: {
              rows: [
                ['TIMP Name', 'Copra grading'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Copra grading is mainly based on moisture content, foreign matter and black copra...'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.9 VALUE ADDITION IN COCONUT
      // --------------------------------------------------------
      {
        id: '2.9',
        title: '2.9 Value Addition in Coconut',
        subsections: [
          {
            id: '2.9.1',
            title: '2.9.1 Virgin coconut oil',
            table: {
              rows: [
                ['TIMP Name', 'Virgin coconut oil'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is edible oil obtained from fresh, mature endosperm (kernel-meat) of coconut by mechanical or natural means, with or without the use of heat and no chemical refining...'],
              ],
            },
          },
          {
            id: '2.9.2',
            title: '2.9.2 Grated coconut',
            table: {
              rows: [
                ['TIMP Name', 'Grated coconut'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Extraction of is edible oil from fresh, mature endosperm (kernel-meat) of coconut by mechanical or natural means...'],
              ],
            },
          },
          {
            id: '2.9.3',
            title: '2.9.3 Coconut milk and coconut cream',
            table: {
              rows: [
                ['TIMP Name', 'Coconut milk and coconut cream'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Coconut milk is a sweet, milky white liquid obtained by grating the meat of mature coconut kernel and thereafter adding water twice the volume of grated coconut to produce milk...'],
              ],
            },
          },
          {
            id: '2.9.4',
            title: '2.9.4 Coconut flour',
            table: {
              rows: [
                ['TIMP Name', 'Coconut flour'],
                ['Category', 'Innovation'],
                ['What is it? (TIMP description)', 'This is flour prepared from drying and grinding the residue which remains after expelling the coconut milk...'],
              ],
            },
          },
          {
            id: '2.9.5',
            title: '2.9.5 Tender coconut water (Madafu)',
            table: {
              rows: [
                ['TIMP Name', 'Tender coconut water (Madafu)'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is the water of tender coconut, technically the liquid endosperm. Tender coconut water is at its optimum level of acceptability and economic viability for commercial use when nuts are 6-7 months of maturity...'],
              ],
            },
          },
          {
            id: '2.9.6',
            title: '2.9.6 Snow ball tender coconut',
            table: {
              rows: [
                ['TIMP Name', 'Snow ball tender coconut'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Snow ball tender coconut is the tender coconut without the husk, shell and testa, which is a ball in shape and white in colour...'],
              ],
            },
          },
          {
            id: '2.9.7',
            title: '2.9.7 Tender coconut kernel products',
            table: {
              rows: [
                ['TIMP Name', 'Tender coconut kernel products'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'These are kernels of tender coconut. It is a good source of carbohydrates and fibre. Processed young tender coconut kernel could be in the form of sweetened dehydrated young coconut kernel in syrup or dried chips...'],
              ],
            },
          },
          {
            id: '2.9.8',
            title: '2.9.8 Mature coconut water',
            table: {
              rows: [
                ['TIMP Name', 'Products Derived from Coconut Water of Mature Coconut'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is soft drink produced from the coconut water of mature nuts. The process involves collection of water, pasteurization, filtration and bottling...'],
              ],
            },
          },
          {
            id: '2.9.9',
            title: '2.9.9 Palm wine / Toddy (mnazi)',
            table: {
              rows: [
                ['TIMP Name', 'Palm wine / Toddy (mnazi)'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Palm wine also called Toddy or simply Toddy (locally called mnazi) is an alcoholic beverage prepared from mature coconut water through spontaneous fermentation.'],
              ],
            },
          },
          {
            id: '2.9.10',
            title: '2.9.10 Coconut vinegar',
            table: {
              rows: [
                ['TIMP Name', 'Coconut vinegar'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is vinegar made from fermented coconut water by fermentation and inoculation with acetic acid bacteria in vinegar generators...'],
              ],
            },
          },
          {
            id: '2.9.11',
            title: '2.9.11 Coconut fibre',
            table: {
              rows: [
                ['TIMP Name', 'Coconut fibre'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is coir fibre processed from coconut husks.'],
              ],
            },
          },
          {
            id: '2.9.12',
            title: '2.9.12 Coconut fibre rope',
            table: {
              rows: [
                ['TIMP Name', 'Coconut fibre rope'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is rope weaved rom coir fibre'],
              ],
            },
          },
          {
            id: '2.9.13',
            title: '2.9.13 Door mat from coconut fibre',
            table: {
              rows: [
                ['TIMP Name', 'Door mat from coconut fibre'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'This is mat processed from coir fibre'],
              ],
            },
          },
          {
            id: '2.9.14',
            title: '2.9.14 Coco peat',
            table: {
              rows: [
                ['TIMP Name', 'Coco peat'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Plant growing media processed from coconut husks. Coco peat is a multipurpose growing media that provides new opportunities for Potting Mix Suppliers, seedling nurseries, hydroponic growers and golf green constructors...'],
              ],
            },
          },
          {
            id: '2.9.15',
            title: '2.9.15 Coconut shell ear ring',
            table: {
              rows: [
                ['TIMP Name', 'Coconut shell ear ring'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Ear rings processed from coconut husks'],
              ],
            },
          },
          {
            id: '2.9.16',
            title: '2.9.16 Coconut shell hair clip',
            table: {
              rows: [
                ['TIMP Name', 'Coconut shell hair clip'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Hair clips processed from coconut husks'],
              ],
            },
          },
          {
            id: '2.9.17',
            title: '2.9.17 Coconut shell bangles',
            table: {
              rows: [
                ['TIMP Name', 'Coconut shell bangles'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Bangles processed from coconut husks'],
              ],
            },
          },
          {
            id: '2.9.18',
            title: '2.9.18 Coconut shell cups',
            table: {
              rows: [
                ['TIMP Name', 'Coconut shell cups'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Cups processed from coconut shells'],
              ],
            },
          },
          {
            id: '2.9.19',
            title: '2.9.19 Coconut shell belt',
            table: {
              rows: [
                ['TIMP Name', 'Coconut shell belt'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Belts processed from coconut husks'],
              ],
            },
          },
          {
            id: '2.9.20',
            title: '2.9.20 Coconut shell doll',
            table: {
              rows: [
                ['TIMP Name', 'Coconut shell doll'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Doll processed from coconut husks'],
              ],
            },
          },
          {
            id: '2.9.21',
            title: '2.9.21 Coconut shell charcoal/activated carbon',
            table: {
              rows: [
                ['TIMP Name', 'Coconut shell charcoal/activated carbon'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Charcoal obtained from coconut shell. Coconut shell is manufactured by burning the shell of fully matured nuts in a limited supply of air sufficient for carbonization, but not for complete destruction...'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.10 MECHANIZATION OF COCONUT PRODUCTION ACTIVITIES
      // --------------------------------------------------------
      {
        id: '2.10',
        title: '2.10 Mechanization of Coconut Production Activities',
        subsections: [
          {
            id: '2.10.1',
            title: '2.10.1 Power tiller',
            table: {
              rows: [
                ['TIMP Name', 'Power tiller'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'A Power tiller is a low powered two-wheeled agricultural implement, also referred to as a walking tractor 8-16hp that can be fitted with a rotary tiller, disk harrow, mouldboard plough, trailer, water pump or chisel at alternate times...'],
                ['Basic costs', 'KES 280,000'],
                ['F: Status of TIMP readiness', 'Ready for up scaling'],
              ],
            },
          },
          {
            id: '2.10.2',
            title: '2.10.2 Four-wheeled Tractor 50Hp',
            table: {
              rows: [
                ['TIMP Name', 'Four-wheeled Tractor 50Hp'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'A small sized, four-wheeled tractor is a low powered agricultural implement of 40-55hp that can be fitted with a rotary tiller, disk harrow, mouldboard plough, trailer, water pump or chisel at alternate times...'],
                ['Basic costs', 'KES 1,780,000.00'],
                ['F: Status of TIMP readiness', 'Ready for up scaling'],
              ],
            },
          },
          {
            id: '2.10.3',
            title: '2.10.3 Mouldboard Plough',
            table: {
              rows: [
                ['TIMP Name', 'Mouldboard Plough'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Mouldboard plough is generally considered the most important tillage implement. Mouldboard ploughs are available for power tiller and tractor operation...'],
                ['Basic costs', 'KES 550,000'],
              ],
            },
          },
          {
            id: '2.10.4',
            title: '2.10.4 Harrow',
            table: {
              rows: [
                ['TIMP Name', 'Harrow'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'It is an implement consisting of a heavy frame set with teeth or tines which is dragged over ploughed land to break up clods, remove weeds, and cover seed...'],
                ['Basic costs', 'KES 280,000'],
              ],
            },
          },
          {
            id: '2.10.5',
            title: '2.10.5 Seed drill',
            table: {
              rows: [
                ['TIMP Name', 'Seed drill'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Hole digger is a PTO driven machine that digs holes in rows on equal distances mechanically and economically...'],
                ['Basic costs', 'KES 40,000 (power auger digger), KES 450,000 (Tractor mounted hole digger)'],
              ],
            },
          },
          {
            id: '2.10.6',
            title: '2.10.6 Motorised Sprayer',
            table: {
              rows: [
                ['TIMP Name', 'Motorised Sprayer'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'A motorized sprayer is a device used to spray a liquid, where sprayers are commonly used for projection of water, weed killers, crop performance materials...'],
                ['Basic costs', 'Motorized sprayer 55,000 KES per unit'],
              ],
            },
          },
          {
            id: '2.10.7',
            title: '2.10.7 Coconut harvesting tool',
            table: {
              rows: [
                ['TIMP Name', 'Coconut harvesting tool'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'Power harvesters are used to harvest coconut bunches by making some cuts onto the bunch. It can also be used to prune old coconut leaves/fronds...'],
              ],
            },
          },
          {
            id: '2.10.8',
            title: '2.10.8 Coconut harvesting stick',
            table: {
              rows: [
                ['TIMP Name', 'Coconut harvesting stick'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The coconut harvesting sticks are used to harvest coconut bunches by making some cuts onto the bunch by means of a metallic sickle that is attached at the end of the adjustable stick...'],
              ],
            },
          },
          {
            id: '2.10.9',
            title: '2.10.9 Coconut harvesting climbing gear',
            table: {
              rows: [
                ['TIMP Name', 'Coconut harvesting climbing gear'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The coconut harvesting climbing gear are used to help climbers harvest coconut bunches in tall coconut trees faster and safer than when manual climbing is done...'],
              ],
            },
          },
          {
            id: '2.10.10',
            title: '2.10.10 Coconut harvesting Robot',
            table: {
              rows: [
                ['TIMP Name', 'Coconut harvesting Robot'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The coconut harvesting robots are used to help harvest coconut bunches in tall coconut trees faster and safer without having a climber physically climbing the tree...'],
              ],
            },
          },
          {
            id: '2.10.11',
            title: '2.10.11 Tractor mounted telescopic hoist',
            table: {
              rows: [
                ['TIMP Name', 'Tractor mounted telescopic hoist'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The coconut harvesting by use of tractor mounted telescopic hoist help harvest coconut bunches in tall coconut trees faster and safer without having a climber physically climbing the tree...'],
              ],
            },
          },
          {
            id: '2.10.12',
            title: '2.10.12 Coconut de-husking tool',
            table: {
              rows: [
                ['TIMP Name', 'Coconut de-husking tool'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The coconut de-husking by use of the de-husking tool helps in de-husking many coconuts faster and safer thereby making more nuts available for further processing...'],
              ],
            },
          },
          {
            id: '2.10.13',
            title: '2.10.13 Coconut de-husking machine',
            table: {
              rows: [
                ['TIMP Name', 'Coconut de-husking machine'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The coconut de-husking by use of the electric de-husking machine helps in de-husking many coconuts faster and safer thereby making more nuts available for further processing...'],
              ],
            },
          },
          {
            id: '2.10.14',
            title: '2.10.14 Coconut grating tool',
            table: {
              rows: [
                ['TIMP Name', 'Coconut grating tool'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The coconut grating by use of the grating tool helps in grating many coconuts faster and safer thereby making more grated coconut available for further processing...'],
              ],
            },
          },
          {
            id: '2.10.15',
            title: '2.10.15 Electric coconut grating equipment',
            table: {
              rows: [
                ['TIMP Name', 'Electric coconut grating equipment'],
                ['Category', 'Technology'],
                ['What is it? (TIMP description)', 'The coconut grating by use of the electric grating equipment helps in grating many coconuts faster and safer thereby making more grated coconut available for further processing...'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.11 COCONUT VALUE CHAIN BUSINESS AND MARKETING
      // --------------------------------------------------------
      {
        id: '2.11',
        title: '2.11 Coconut Value Chain Business and Marketing',
        subsections: [
          {
            id: '2.11.1',
            title: '2.11.1 Models for market-oriented production of Coconut products',
            table: {
              rows: [
                ['TIMP Name', 'Models for market-oriented production of Coconut products and by-products'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'An approach to organize coconut production based on market orientation. Producer-driven model is based on production organized by the producers themselves...'],
              ],
            },
          },
          {
            id: '2.11.2',
            title: '2.11.2 Developing business plans for the coconut enterprise',
            table: {
              rows: [
                ['TIMP Name', 'Developing business plans for the coconut enterprise/business'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'A coconut enterprise business plan will serve as an internal management and organizational tool that informs decision making; a tool to communicate with internal and external stakeholders of the enterprise.'],
              ],
            },
          },
          {
            id: '2.11.3',
            title: '2.11.3 Collective marketing of coconut products and by-products',
            table: {
              rows: [
                ['TIMP Name', 'Collective marketing of coconut products and by-products: the case of Organized Marketing Groups'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Marketing as a group is a collective marketing approach. It involves formation of a group of farmers with a common objective of reducing market costs, increasing their bargaining power...'],
              ],
            },
          },
          {
            id: '2.11.4',
            title: '2.11.4 Profitability analysis',
            table: {
              rows: [
                ['TIMP Name', 'Profitability analysis: Performance Evaluation/Measures for the Coconut products and by-products business'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Profitability analysis involves recording of costs and returns and a determination of profit/loss levels as an indicator of performance of the coconut enterprise.'],
              ],
            },
          },
          {
            id: '2.11.5',
            title: '2.11.5 Participatory market research',
            table: {
              rows: [
                ['TIMP Name', 'Participatory market research for coconut products and by-products'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Pathways and sources through which farmers and other actors along the coconut value chain will be enabled to access market information'],
              ],
            },
          },
          {
            id: '2.11.6',
            title: '2.11.6 An approach for developing and scaling up of a sustainable coconut enterprise',
            table: {
              rows: [
                ['TIMP Name', 'An approach for developing and scaling up of a sustainable coconut enterprise'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'A new plan to organize farmers to supply target markets. This is a plan to increase production through increasing the number of new groups involved in the coconut value chain...'],
              ],
            },
          },
          {
            id: '2.11.7',
            title: '2.11.7 Developing an online/E-Marketing platform',
            table: {
              rows: [
                ['TIMP Name', 'Developing an online/E-Marketing platform for Coconut products and by-products'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Internet marketing refers to an online advertisement and selling approach through various digital means...'],
              ],
            },
          },
          {
            id: '2.11.8',
            title: '2.11.8 An Entrepreneurial model for Coconut products and by-products marketing',
            table: {
              rows: [
                ['TIMP Name', 'An Entrepreneurial model for Coconut products and by-products marketing'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'An entrepreneural farmer undertakes innovations and finances it to a business venture in an effort to transform innovations into economic goods that meet targeted need in society...'],
              ],
            },
          },
        ],
      },

      // --------------------------------------------------------
      // 2.12 AGRICULTURAL POLICY OPTIONS INFLUENCING COCONUT ENTERPRISE
      // --------------------------------------------------------
      {
        id: '2.12',
        title: '2.12 Agricultural Policy Options Influencing Coconut Enterprise',
        subsections: [
          {
            id: '2.12.1',
            title: '2.12.1 Regional and National Agricultural policy framework',
            table: {
              rows: [
                ['TIMP Name', 'Regional and National Agricultural policy framework and strategies supporting the Coconut sub-sector'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Regional, National Agricultural policy framework includes policies, regulations and laws that control and regulate the coconut value chain business that is dominated by small-scale producers.'],
              ],
            },
          },
          {
            id: '2.12.2',
            title: '2.12.2 Policy options influencing coconut products and by-products producers',
            table: {
              rows: [
                ['TIMP Name', 'Policy options influencing coconut products and by-products producers and other actors'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'The policies being highlighted for recommendation herein are for the purpose of regulating the value chain from a market focus so as to respond to issues of Q&Q.'],
              ],
            },
          },
          {
            id: '2.12.3',
            title: '2.12.3 Policy Instruments influencing the Coconut value chain',
            table: {
              rows: [
                ['TIMP Name', 'Policy Instruments influencing the Coconut value chain'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Policy instruments are the means to achieve policy objectives.'],
              ],
            },
          },
          {
            id: '2.12.4',
            title: '2.12.4 Policy cycle process and implementation at county level',
            table: {
              rows: [
                ['TIMP Name', 'Policy cycle process and implementation at county level for the Coconut value chain'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'The policy cycle creates the need for a policy based on the agricultural problem emergence/issues...'],
              ],
            },
          },
          {
            id: '2.12.5',
            title: '2.12.5 Policy validation customization for the coconut value chain',
            table: {
              rows: [
                ['TIMP Name', 'Policy validation customization for the coconut value chain'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'A policy validation cycle involves an existing agricultural policy, database and stakeholders.'],
              ],
            },
          },
          {
            id: '2.12.6',
            title: '2.12.6 Registration and licensing of functional stakeholders',
            table: {
              rows: [
                ['TIMP Name', 'Registration and licensing of functional stakeholders and stakeholders’ operations'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'Registration of all coconut growers and/or post-harvest functions provides an opportunity for an official recognition of the growers and/or actors by the Nuts and Oil Crops Directorate...'],
              ],
            },
          },
          {
            id: '2.12.7',
            title: '2.12.7 Regulation of Coconut production, processing and market provisions',
            table: {
              rows: [
                ['TIMP Name', 'Regulation of Coconut production, processing and market provisions for coconut products, by-products and processes'],
                ['Category', 'Management practice'],
                ['What is it? (TIMP description)', 'This policy instrument provides a roadmap for promotion of products’ standards through certification of seed sources and the seed...'],
              ],
            },
          },
        ],
      },
    ],
  },
];