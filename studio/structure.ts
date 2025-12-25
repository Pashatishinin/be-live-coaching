import type {StructureResolver} from 'sanity/structure'
import {CogIcon, LinkIcon, VersionsIcon} from '@sanity/icons'
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
import {BugIcon} from '@sanity/icons'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Контент')
    .items([
      S.listItem()
        .title('Початкова секція')
        .icon(VersionsIcon)
        .child(S.document().schemaType('hero').documentId('hero')),

      S.listItem()
        .title('Питання')
        .icon(SparklesIcon)
        .child(() => S.documentTypeList('faq').title('Питання')),
      S.listItem()
        .title('Проблеми')
        .icon(BugIcon)
        .child(
          S.list()
            .title('Розділи')
            .items([
              // Используем documentListItem вместо listItem
              S.documentListItem().schemaType('problems').id('problem_one_id').title('Проблема №1'), // Это заголовок по умолчанию, пока поле пустое

              S.documentListItem().schemaType('problems').id('problem_two_id').title('Проблема №2'),

              S.documentListItem()
                .schemaType('problems')
                .id('problem_three_id')
                .title('Проблема №3'),

              S.divider(),

              S.documentListItem()
                .schemaType('link')
                .id('shared_problem_link')
                .title('Загальне посилання'),
            ]),
        ),

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
