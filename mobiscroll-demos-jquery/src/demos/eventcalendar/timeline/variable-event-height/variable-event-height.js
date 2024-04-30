import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
      theme: 'ios',
    });

    $(function () {
      var inst = $('#demo-variable-event-height')
        .mobiscroll()
        .eventcalendar({
          //   dragToCreate: true,
          //   dragToMove: true,
          //   dragToResize: true,
          //   externalDrop: true,
          view: {
            timeline: {
              type: 'day',
              eventHeight: 'variable',
              // startTime: '09:00',
              // endTime: '18:00',
              // timeCellStep: '120',
              // timeLabelStep: '120',
            },
          },
          // exclusiveEndDates: false,
          invalid: [
            {
              start: '13:00',
              end: '14:00',
              recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR,SA,SU' },
              title: 'Lunch break',
            },
          ],
          renderScheduleEvent: function (event) {
            console.log(event);
            // return '<div class="my-eventzz" style="background: red;"> <div class="title">' + event.title + '</div></div>';
            return (
              '<div class="mds-variable-event-heights-wrapper" style="background: ' +
              event.style.background +
              '; color: ' +
              event.style.color +
              ';"><div class="mds-variable-event-heights-title">' +
              event.title +
              '</div> <div class="mds-variable-event-heights-duration">' +
              event.start.toString() +
              ' - ' +
              event.end.toString() +
              '</div><div class="mds-variable-event-heights-description">' +
              event.original.description +
              '</div></div>'
            );
          },
          resources: [
            {
              id: 1,
              name: 'Franklin Hall',
              color: '#fdf500',
            },
            {
              id: 2,
              name: 'Jefferson Commons',
              color: '#ff4600',
            },
            {
              id: 3,
              name: 'Lincoln Residence',
              color: '#8f1ed6',
            },
            {
              id: 4,
              name: 'Roosevelt House',
              color: '#239a21',
            },
            {
              id: 5,
              name: 'Adams Hall',
              color: '#ff0101',
            },
            {
              id: 6,
              name: 'Washington Tower',
              color: '#01adff',
            },
          ],
          data: [
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Advancing Agricultural Sustainability',
              description:
                'Esteemed experts delve into strategies for advancing agricultural sustainability, exploring innovative practices, and policy frameworks aimed at enhancing productivity while conserving natural resources.',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Future of Farming',
              resource: 1,
              description: 'Experts discuss technological advancements and sustainability in agriculture.',
            },
            {
              start: 'dyndatetime(y,m,d,16)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Agri-Technology Trends',
              resource: 1,
              description: 'Experts discuss emerging trends in agricultural technology. ',
            },
            {
              start: 'dyndatetime(y,m,d + 1, 9)',
              end: 'dyndatetime(y,m,d + 1, 13)',
              title: 'Precision Agriculture Applications',
              resource: 1,
              description:
                'Attendees delve into the applications of precision agriculture, learning about data-driven decision-making, sensor technologies, and precision equipment to optimize inputs, increase yields, and minimize environmental impact.',
            },
            {
              start: 'dyndatetime(y,m,d + 1,14)',
              end: 'dyndatetime(y,m,d + 1,18)',
              title: 'Agroforestry for Carbon Sequestration',
              resource: 1,
              description:
                "Learn about agroforestry's role in carbon sequestration in a seminar, exploring carbon farming practices, tree planting initiatives, and payments for ecosystem services schemes aimed at mitigating climate change and enhancing rural livelihoods.",
            },
            {
              start: 'dyndatetime(y,m,d - 1,9)',
              end: 'dyndatetime(y,m,d - 1,13)',
              title: 'Food Safety Certification',
              resource: 1,
              description:
                'Attend a training session on food safety certification, covering requirements, standards, and best practices for achieving and maintaining certification in food safety management systems, ensuring compliance and market access for agricultural products.',
            },
            {
              start: 'dyndatetime(y,m,d - 1,14)',
              end: 'dyndatetime(y,m,d - 1, 18)',
              title: 'Action Plans',
              resource: 1,
              description: 'Develop action plans for implementing conference insights. ',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Innovations in Crop Genetics',
              resource: 2,
              description:
                'Researchers present groundbreaking innovations in crop genetics, showcasing advances in breeding techniques, genetic engineering, and trait development to address challenges such as climate change and food security.',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Soil Health',
              description: 'Experts debate methods to improve soil health and fertility.',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Precision Farming Techniques',
              resource: 2,
              description: 'Learn about precision agriculture and its role in modern farming.',
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Water Management Solutions for Agriculture',
              resource: 2,
              description:
                'A seminar focuses on water management solutions, highlighting efficient irrigation techniques, water conservation strategies, and technologies for sustainable water use in agricultural production systems.',
            },
            {
              start: 'dyndatetime(y,m,d-1,9)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Agroforestry for Climate Resilience',
              resource: 2,
              description:
                "Experts convene for a roundtable discussion on agroforestry's role in climate resilience, examining its potential to enhance biodiversity, soil health, and carbon sequestration while providing additional income streams for farmers.",
            },
            {
              start: 'dyndatetime(y,m,d-1,14)',
              end: 'dyndatetime(y,m,d-1,16)',
              title: 'Documentaries on Sustainable Agriculture',
              resource: 2,
              description:
                'Attendees enjoy thought-provoking documentaries on sustainable agriculture, exploring diverse approaches, success stories, and challenges in promoting ecological, social, and economic sustainability in farming.',
            },
            {
              start: 'dyndatetime(y,m,d-1,16)',
              end: 'dyndatetime(y,m,d-1,18)',
              title: 'Farming Challenges',
              resource: 2,
              description: 'Identify and discuss challenges faced by farmers globally.',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Pest Management',
              resource: 3,
              description: 'Learn effective methods for pest control in agriculture.',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Women in Agriculture Leadership',
              resource: 3,
              description:
                'Female leaders in agriculture discuss their experiences, challenges, and contributions to the industry in a panel discussion on women in agriculture leadership, advocating for gender equity and empowerment.',
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Emerging Trends in Agri-Tech',
              resource: 3,
              description:
                'Researchers present their findings on emerging trends in Agri-Tech through a poster session, covering topics such as digital agriculture, automation, blockchain, and other technological innovations shaping the future of farming.',
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,16)',
              title: 'Agri-Startups',
              resource: 3,
              description: 'Entrepreneurs pitch agricultural business ideas to investors and experts.',
            },
            {
              start: 'dyndatetime(y,m,d+1,16)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Empowering Young Farmers',
              resource: 3,
              description:
                'Empower young farmers through a youth forum focused on agricultural education, entrepreneurship, and innovation, providing opportunities for mentorship, networking, and skill-building to inspire the next generation of agricultural leaders.',
            },
            {
              start: 'dyndatetime(y,m,d-1,9)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Sustainable Livestock',
              resource: 3,
              description: 'Engage in activities to promote sustainable livestock farming.',
            },
            {
              start: 'dyndatetime(y,m,d-1,14)',
              end: 'dyndatetime(y,m,d-1,18)',
              title: 'Food Safety Standards Compliance',
              resource: 3,
              description:
                'Attend a training session on food safety standards compliance, covering topics such as HACCP principles, good agricultural practices (GAP), and food safety management systems to ensure the safety and quality of agricultural products.',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Climate-Smart Agriculture Practices',
              resource: 4,
              description:
                'Learn about climate-smart agriculture practices in an expert lecture, exploring strategies for adapting to climate change, mitigating greenhouse gas emissions, and building resilience in agricultural production systems.',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Agri-Policy Reform',
              resource: 4,
              description: 'Debate reforms needed in agricultural policies worldwide.',
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Agri-Education',
              resource: 4,
              description: 'Workshops to educate on various aspects of agriculture.',
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Agri-Environmental',
              resource: 4,
              description: 'Environmental issues affecting agriculture.',
            },
            {
              start: 'dyndatetime(y,m,d-1,9)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Agri-Robotics',
              resource: 4,
              description: 'See demonstrations of robotics used in agriculture.',
            },
            {
              start: 'dyndatetime(y,m,d-1,14)',
              end: 'dyndatetime(y,m,d-1,18)',
              title: 'Sustainable Agri-Business Ideas',
              resource: 4,
              description:
                'Aspiring entrepreneurs pitch sustainable agri-business ideas in a competition, presenting innovative ventures focused on addressing agricultural challenges, promoting sustainability, and creating value along the agricultural value chain.',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,11)',
              title: 'Aquaponics and Integrated Farming Systems',
              resource: 5,
              description:
                'Engage in an interactive workshop on aquaponics and integrated farming systems, learning about symbiotic relationships between fish and plants, nutrient cycling, and sustainable aquaculture practices for diversified, resource-efficient food production.',
            },
            {
              start: 'dyndatetime(y,m,d, 11)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Agri-Subsidies',
              resource: 5,
              description: 'Workshop on government subsidies and incentives for agriculture.',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Agri-Marketing',
              resource: 5,
              description: 'Learn about effective marketing strategies for agricultural products.',
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Urban Farming',
              resource: 5,
              description:
                'Watch documentaries highlighting urban farming initiatives, exploring rooftop gardens, community gardens, and urban agriculture projects contributing to food security, environmental sustainability, and community resilience in cities worldwide.',
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Agri-Trade',
              resource: 5,
              description: 'Discuss trade policies impacting agriculture. ',
            },
            {
              start: 'dyndatetime(y,m,d-1,9)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Agri-Inspiration',
              resource: 5,
              description: 'Screen inspiring films about agricultural success stories.',
            },
            {
              start: 'dyndatetime(y,m,d-1,14)',
              end: 'dyndatetime(y,m,d-1,16)',
              title: 'Sustainable Livestock Production Practices',
              resource: 5,
              description:
                'Attend a lecture on sustainable livestock production practices, exploring animal welfare, grazing management, and regenerative livestock farming techniques aimed at promoting ecological balance, biodiversity, and resilience in agriculture.',
            },
            {
              start: 'dyndatetime(y,m,d-1,16)',
              end: 'dyndatetime(y,m,d-1,18)',
              title: 'Agri-Tourism Development',
              resource: 5,
              description:
                'Participate in a community dialogue on agri-tourism development, discussing opportunities, challenges, and best practices for leveraging agriculture, culture, and nature-based experiences to promote rural tourism and sustainable development.',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Digital Solutions for Smallholder Finance',
              resource: 6,
              description:
                'Discover digital solutions for smallholder finance in a workshop, exploring mobile banking, digital payments, and microfinance innovations aimed at increasing financial inclusion and access to credit for smallholder farmers and rural entrepreneurs.',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Agroecological Transition Strategies',
              resource: 6,
              description:
                'Join a policy roundtable on agroecological transition strategies, discussing policy incentives, support mechanisms, and capacity-building initiatives to facilitate the transition towards more sustainable, resilient, and regenerative agricultural systems.',
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Agri-Cooperatives',
              resource: 6,
              description: 'Discuss the role of cooperatives in agricultural development. ',
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Agri-Waste Management',
              resource: 6,
              description: 'Learn about sustainable waste management practices in agriculture.',
            },
          ],
        })
        .mobiscroll('getInst');

      //   $.getJSON(
      //     'https://trial.mobiscroll.com/timeline-events/?callback=?',
      //     function (events) {
      //       inst.setEvents(events);
      //     },
      //     'jsonp',
      //   );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-variable-event-height"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-variable-event-heights-wrapper {
    /*border-left: 1px solid #fff;
    box-sizing: border-box;*/
  }
  .mds-variable-event-heights-title {
    padding: 16px 16px 0px 16px;
    /*word-break: break-word;*/
    font-size: 24px;
    font-weight: 600;
  }
  .mds-variable-event-heights-duration {
    padding: 16px 0px 0px 16px;
    font-size: 16px;
    font-weight: 600;
  }
  .mds-variable-event-heights-description {
    padding: 24px 16px 16px 16px;
  }
  /* temp fixing for top alignment*/
  .mbsc-timeline-events-row {
    display: flex;
  }
  `,
};
