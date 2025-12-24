import type {StructureResolver} from 'sanity/structure'
import {CogIcon, VersionsIcon} from '@sanity/icons'
import {BarChartIcon} from '@sanity/icons'
import {FeedbackIcon} from '@sanity/icons'
import {SparklesIcon} from '@sanity/icons'
import {InfoOutlineIcon} from '@sanity/icons'
import {EnvelopeIcon} from '@sanity/icons'
import {BulbOutlineIcon} from '@sanity/icons'
import {MasterDetailIcon} from '@sanity/icons'
import {TwitterIcon} from '@sanity/icons'
import {TargetIcon} from '@sanity/icons'
import {AsteriskIcon} from '@sanity/icons'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Контент')
    .items([
      S.listItem()
        .title('Початкова секція')
        .icon(VersionsIcon)
        .child(S.document().schemaType('hero').documentId('hero')),

      S.listItem()
        .title('Кількістні данні')
        .icon(BarChartIcon)
        .child(() => S.documentTypeList('author').title('Кількістні данні')),
      S.listItem()
        .title('Про нас')
        .icon(InfoOutlineIcon)
        .child(() => S.documentTypeList('post').title('Про нас')),
      S.divider(),
      S.listItem()
        .title('Іконки')
        .icon(AsteriskIcon)
        .child(() => S.documentTypeList('icons').title('Іконки')),
      S.listItem()
        .title('SEO Налаштування')
        .icon(CogIcon)
        .child(S.document().schemaType('seo').documentId('seo')),
    ])
