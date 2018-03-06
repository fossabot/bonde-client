import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  DataList,
  DataListRow,
  DataListCol,
  Text,
  Scrollbox
} from '../../'

const DataListCard = ({
  sectionTitle,
  minHeight,
  border,
  fields,
  items
}) => {
  const fieldNames = Object.keys(fields)

  return (
    <Card title={sectionTitle} minHeight={minHeight}>
      <Scrollbox>
        <DataList border={border}>
        {items.map(item => (
          <DataListRow>
          {fieldNames.map(fieldName => (
            <DataListCol {...fields[fieldName]}>
              <Text fontSize={14}>{item[fieldName]}</Text>
            </DataListCol>
          ))}
          </DataListRow>
        ))}
        </DataList>
      </Scrollbox>
    </Card>
  )
}

DataListCard.propTypes = {
  sectionTitle: PropTypes.string,
  minHeight: PropTypes.number,
  border: PropTypes.bool,
  fields: PropTypes.object,
  items: PropTypes.array
}

DataListCard.defaultProps = {
  minHeight: 274,
  border: true,
  fields: {},
  items: []
}

/* @component */
export default DataListCard