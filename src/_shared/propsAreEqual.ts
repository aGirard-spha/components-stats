import isEqual from 'lodash/isEqual'

const propsAreEqual = (prevProps: any, nextProps: any) => isEqual(prevProps, nextProps)

export default propsAreEqual
