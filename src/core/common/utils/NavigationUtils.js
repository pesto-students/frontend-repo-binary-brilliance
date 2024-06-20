import _ from 'lodash';

const NavigationUtils = {
    arrayIdentifier: '__isArray__',
    softRefreshWithQuery: async (router, newQuery = {}) => {
        const { pathname, query } = router;
        const updatedQuery = { ...query, ...newQuery };
        const parsedQuery = NavigationUtils.convertArraysToCSV(updatedQuery);
        await router.push({
            pathname,
            query: parsedQuery,
        }, undefined, { scroll: false });
    },
    convertArraysToCSV: (object) => {
        if (!_.isObject(object) || _.isNull(object)) {
            console.error('Invalid input provided to convertArraysToCSV');
            return {};
        }

        return _.reduce(object, (acc, value, key) => {
            if (_.isArray(value)) {
                acc[key] = value.join(',') + (value.length === 1 ? ',' + NavigationUtils.arrayIdentifier : '');
            } else {
                acc[key] = value;
            }
            return acc;
        }, {});
    },

    convertCSVToArray: (object) => {
        if (!_.isObject(object) || _.isNull(object)) {
            console.error('Invalid input provided to convertCSVToArray');
            return {};
        }

        return _.reduce(object, (acc, value, key) => {
            if (_.isString(value) && value.endsWith(',' + NavigationUtils.arrayIdentifier)) {
                acc[key] = [value.slice(0, -1 * (NavigationUtils.arrayIdentifier.length + 1))];
            } else if (_.isString(value) && value.includes(',')) {
                acc[key] = value.split(',');
            } else {
                acc[key] = value;
            }
            return acc;
        }, {});
    },
};

export default NavigationUtils;