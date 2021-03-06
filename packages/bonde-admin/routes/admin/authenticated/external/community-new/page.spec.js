import React from 'react'
import { shallowWithIntl } from '~root/intl/helpers'

import * as mock from '~client/utils/mock'
import Page from '~routes/admin/authenticated/external/community-new/page'

describe('routes/admin/authenticated/external/community-new/page', () => {
  const props = {
    fields: {
      name: {},
      city: {}
    },
    submitting: false,
    // Actions
    create: mock.noop
  }

  it('should render without crashed', () => {
    shallowWithIntl(<Page {...props} />)
  })
})
