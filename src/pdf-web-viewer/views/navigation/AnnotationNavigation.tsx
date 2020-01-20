import { h, Component } from 'hyperapp'
import { PdfWebViewerState, PdfWebViewerActions } from '../../PdfWebViewer'
import { ScrollContainer } from '../../../common/ScrollContainer'
import { Icon, icons } from '../../../common/Icon'
import { AnnotationItem } from './AnnotationItem'

/* ****/
import { Annotation } from '../../../pdf-viewer-api/types'
import { PdfItemCategory, PdfItemType } from '../../../pdf-viewer-api/enums'
const items: Annotation[] = [
  {
    id: 111,
    itemCategory: PdfItemCategory.ANNOTATION,
    pdfRect: {
      pdfX: 10,
      pdfY: 10,
      pdfW: 10,
      pdfH: 10,
      page: 10,
    },
    itemType: PdfItemType.HIGHLIGHT,
    lastModified: '12.12.2019',
    borderWidth: 0,
    custom: [],
    page: 2,
    content:
      'Curabitur mattis condimentum odio porta interdum. Sed ac cursus lectus.',
    subject: 'Lorem ipsum dolor',
    color: '#000099',
    originalAuthor: 'Hans Muster',
    popup: {} as any,
    isLocked: () => false,
  },
  {
    id: 111,
    itemCategory: PdfItemCategory.ANNOTATION,
    pdfRect: {
      pdfX: 10,
      pdfY: 10,
      pdfW: 10,
      pdfH: 10,
      page: 10,
    },
    itemType: PdfItemType.HIGHLIGHT,
    lastModified: '12.12.2019',
    borderWidth: 0,
    custom: [],
    page: 2,
    content: 'lorem ipsum dolor sit amet',
    subject: 'Aenean bibendum neque in quam tempor dapibus',
    color: '#FF7F1F',
    originalAuthor: 'Hans Muster',
    popup: {} as any,
    isLocked: () => false,
  },
  {
    id: 111,
    itemCategory: PdfItemCategory.ANNOTATION,
    pdfRect: {
      pdfX: 10,
      pdfY: 10,
      pdfW: 10,
      pdfH: 10,
      page: 10,
    },
    itemType: PdfItemType.STAMP,
    lastModified: '12.12.2019',
    borderWidth: 0,
    custom: [],
    page: 2,
    content:
      'Phasellus neque quam, ullamcorper sit amet quam ac, tristique ultricies justo. Duis luctus purus diam, quis tristique nisl bibendum ac.',
    subject: 'Lorem ipsum dolor',
    color: '#dd0000',
    originalAuthor: 'Hans Muster',
    popup: {} as any,
    isLocked: () => false,
  },
  {
    id: 112,
    itemCategory: PdfItemCategory.ANNOTATION,
    pdfRect: {
      pdfX: 10,
      pdfY: 10,
      pdfW: 10,
      pdfH: 10,
      page: 10,
    },
    itemType: PdfItemType.FREE_TEXT,
    lastModified: '12.12.2019',
    borderWidth: 0,
    custom: [],
    page: 2,
    content: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    subject: 'Lorem ipsum dolor',
    color: '#00dd00',
    originalAuthor: 'Hans Muster',
    popup: {} as any,
    isLocked: () => false,
  },
]
/* ****/

/** @internal */
export const AnnotationNavigation: Component<
  {},
  PdfWebViewerState,
  PdfWebViewerActions
> = ({}) => (state, actions) => (
  <ScrollContainer>
    <div class="pwv-annotation-navigation">
      <ul>
        <li class="pwv-annotation-navigation-page">
          <h4>Page 1</h4>
          <ul>
            {items.map((annotation, index) => (
              <AnnotationItem annotation={annotation} selected={index === 1} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  </ScrollContainer>
)
