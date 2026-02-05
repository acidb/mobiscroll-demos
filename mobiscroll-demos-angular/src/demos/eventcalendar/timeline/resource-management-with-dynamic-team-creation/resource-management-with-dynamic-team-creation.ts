import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscItemDragEvent,
  MbscModule,
  MbscResource,
  MbscResourceCreateEvent,
  MbscResourceDeleteEvent,
  MbscResourceOrderEvent,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-resource-management-with-dynamic-team-creation',
  styleUrl: './resource-management-with-dynamic-team-creation.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './resource-management-with-dynamic-team-creation.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('timeline', { static: true })
  timelineInst!: MbscEventcalendar;

  @ViewChildren('draggables')
  dragElements!: QueryList<ElementRef<HTMLDivElement>>;

  installers: MbscResource[] = [
    {
      id: 'it-1',
      name: 'Installer team 1',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 1,
          name: 'Emily Carter',
          color: '#007acc',
          title: 'Electrician',
        },
        {
          id: 2,
          name: 'Michael Lawson',
          color: '#008000',
          title: 'Plumber',
        },
      ],
    },
    //<hide-comment>
    {
      id: 'it-2',
      name: 'Installer team 2',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 3,
          name: 'James Brown',
          color: '#FF5733',
          title: 'Carpenter',
        },
      ],
    },
    {
      id: 'it-3',
      name: 'Installer team 3',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 4,
          name: 'Daniel Wilson',
          color: '#900C3F',
          title: 'Welder',
        },
      ],
    },
    {
      id: 'it-4',
      name: 'Installer team 4',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 5,
          name: 'Benjamin Harris',
          color: '#1ABC9C',
          title: 'Heavy Equipment Operator',
        },
      ],
    },
    {
      id: 'it-5',
      name: 'Installer team 5',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 6,
          name: 'William Anderson',
          color: '#F39C12',
          title: 'Concrete Finisher',
        },
        {
          id: 7,
          name: 'Emma Thompson',
          color: '#D35400',
          title: 'Steelworker',
        },
      ],
    },
    {
      id: 'it-6',
      name: 'Installer team 6',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 8,
          name: 'Alexander Roberts',
          color: '#8E44AD',
          title: 'Painter',
        },
      ],
    },
    //</hide-comment>
  ];

  availableInstallers: MbscResource[] = [
    {
      id: 9,
      name: 'Adam Miller',
      color: '#C70039',
      title: 'Mason',
    },
    {
      id: 10,
      name: 'Isabella Martinez',
      color: '#2ECC71',
      title: 'Surveyor',
    },
    {
      id: 11,
      name: 'Mark White',
      color: '#34495E',
      title: 'Glazier',
    },
    //<hide-comment>
    {
      id: 12,
      name: 'Liam Foster',
      color: '#1E90FF',
      title: 'Concrete Finisher',
    },
    {
      id: 13,
      name: 'Sophia Adams',
      color: '#FF4500',
      title: 'Steelworker',
    },
    {
      id: 14,
      name: 'Ethan Murphy',
      color: '#228B22',
      title: 'Heavy Equipment Operator',
    },
    {
      id: 15,
      name: 'Ava Mitchell',
      color: '#FFD700',
      title: 'Surveyor',
    },
    {
      id: 16,
      name: 'Noah Carter',
      color: '#8B4513',
      title: 'Painter',
    },
    {
      id: 17,
      name: 'Emma Scott',
      color: '#800080',
      title: 'Roofer',
    },
    {
      id: 18,
      name: 'William Bennett',
      color: '#DC143C',
      title: 'Plasterer',
    },
    {
      id: 19,
      name: 'Olivia Parker',
      color: '#4682B4',
      title: 'Demolition Specialist',
    },
    //</hide-comment>
  ];

  tasks: MbscCalendarEvent[] = [
    {
      id: 1,
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,13'),
      title: 'Electrical wiring installation',
      resource: 1,
    },
    {
      id: 2,
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,18'),
      title: 'Power panel connection',
      resource: 1,
    },
    {
      id: 3,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Water pipe fitting',
      resource: 2,
    },
    //<hide-comment>
    {
      id: 4,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,18'),
      title: 'Leak inspection and sealing',
      resource: 2,
    },
    {
      id: 5,
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,13'),
      title: 'Wood framing for new walls',
      resource: 3,
    },
    {
      id: 6,
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,18'),
      title: 'Door and window frame assembly',
      resource: 3,
    },
    {
      id: 7,
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,13'),
      title: 'Bricklaying for foundation',
      resource: 9,
    },
    {
      id: 8,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,16'),
      title: 'Applying cement mortar',
      resource: 9,
    },
    {
      id: 9,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Welding steel beams',
      resource: 4,
    },
    {
      id: 10,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,17'),
      title: 'Structural reinforcement welding',
      resource: 4,
    },
    {
      id: 11,
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,14'),
      title: 'Operating bulldozer for site leveling',
      resource: 5,
    },
    {
      id: 12,
      start: dyndatetime('y,m,d,14,20'),
      end: dyndatetime('y,m,d,18'),
      title: 'Material lifting with crane',
      resource: 5,
    },
    {
      id: 13,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Land survey for new roads',
      resource: 10,
    },
    {
      id: 14,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,17'),
      title: 'Boundary marking for structures',
      resource: 10,
    },
    {
      id: 15,
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,13'),
      title: 'Concrete floor polishing',
      resource: 6,
    },
    {
      id: 16,
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,18'),
      title: 'Applying protective coatings on concrete',
      resource: 6,
    },
    {
      id: 17,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Steel frame installation',
      resource: 7,
    },
    {
      id: 18,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,17'),
      title: 'Bolting and securing steel structures',
      resource: 7,
    },
    {
      id: 19,
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,14'),
      title: 'Interior painting preparation',
      resource: 8,
    },
    {
      id: 20,
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,18,10'),
      title: 'Applying finishing coats',
      resource: 8,
    },
    {
      id: 21,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Glass panel measurement and cutting',
      resource: 11,
    },
    {
      id: 22,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,17'),
      title: 'Installing large glass windows',
      resource: 11,
    },
    {
      id: 23,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Concrete foundation pouring',
      resource: 12,
    },
    {
      id: 24,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,18'),
      title: 'Curing and leveling concrete',
      resource: 12,
    },
    {
      id: 25,
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,15'),
      title: 'Structural steel beam welding',
      resource: 13,
    },
    {
      id: 26,
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,18'),
      title: 'Reinforcement bar assembly',
      resource: 13,
    },
    {
      id: 27,
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,14'),
      title: 'Excavation for foundation',
      resource: 14,
    },
    {
      id: 28,
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,17,30'),
      title: 'Operating crane for material transport',
      resource: 14,
    },
    {
      id: 29,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Land survey for new section',
      resource: 15,
    },
    {
      id: 30,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,17'),
      title: 'Marking layout for construction work',
      resource: 15,
    },
    {
      id: 31,
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,13'),
      title: 'Exterior wall painting',
      resource: 16,
    },
    {
      id: 32,
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,18'),
      title: 'Applying protective coatings',
      resource: 16,
    },
    {
      id: 33,
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,12'),
      title: 'Roof tiling installation',
      resource: 17,
    },
    {
      id: 34,
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,17,45'),
      title: 'Leak-proofing and insulation work',
      resource: 17,
    },
    {
      id: 35,
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Plastering interior walls',
      resource: 18,
    },
    {
      id: 36,
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,18'),
      title: 'Ceiling plaster and finishing',
      resource: 18,
    },
    {
      id: 37,
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,15'),
      title: 'Controlled demolition of old structure',
      resource: 19,
    },
    {
      id: 38,
      start: dyndatetime('y,m,d,15,15'),
      end: dyndatetime('y,m,d,17,45'),
      title: 'Site cleanup and debris removal',
      resource: 19,
    },
    //</hide-comment>
  ];

  myView: MbscEventcalendarView = {
    timeline: { type: 'day', resourceReorder: true, startTime: '07:00', endTime: '18:00' },
  };

  onResourceCreate(args: MbscResourceCreateEvent) {
    this.availableInstallers = this.availableInstallers.filter((installer) => installer.id !== args.resource.id);
    this.notify.toast({
      message: args.resource.name + ' added to ' + args.parent?.name,
    });
  }

  onResourceDelete(args: MbscResourceDeleteEvent) {
    this.notify.toast({
      message: args.resource.name + ' removed from ' + args.parent?.name,
    });
  }

  onResourceOrderUpdate(args: MbscResourceOrderEvent) {
    const parent = args.parent;
    const oldParent = args.oldParent;

    if (parent && oldParent) {
      this.notify.toast({
        message: args.resource.name + ' moved to ' + args.parent?.name,
      });
    }

    if (parent && parent.children) {
      // Remove placeholder resource
      parent.children = parent.children.filter((child) => !child['placeholder']);
    }

    if (oldParent && oldParent.children && !oldParent.children.length) {
      // Add placeholder resource
      oldParent.children.push({
        id: 'ph-' + oldParent.id,
        name: 'Drag Technicians here',
        placeholder: true,
        reorder: false,
      });
    }
  }

  onItemDrop(args: MbscItemDragEvent): void {
    if (args.data && args.dataType === 'resource') {
      this.availableInstallers = [...this.availableInstallers, args.data as MbscResource];
      setTimeout(() => {
        const dragElms = this.dragElements;
        const lastDragElm = dragElms.get(dragElms.length - 1);
        if (lastDragElm) {
          lastDragElm.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      });
    }
  }

  addNewTeam() {
    const teamLength = this.installers.length + 1;
    const resourceId = 'it-' + teamLength;

    this.installers = [
      ...this.installers,
      {
        id: resourceId,
        eventCreation: false,
        reorder: false,
        name: 'Installer team ' + teamLength,
        children: [
          {
            id: 'ph-' + resourceId,
            name: 'Drag Technicians here',
            placeholder: true,
            reorder: false,
          },
        ],
      },
    ];

    this.timelineInst.navigateToEvent({
      start: new Date(),
      resource: resourceId,
    });
  }
}
