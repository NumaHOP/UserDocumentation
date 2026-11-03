---
title: Best Practices
sidebar_label: Best Practices
sidebar_position: 6
description: Volume recommendations and best practices for NumaHOP
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "thumbs-up"]} /> Best Practices

:::warning Page under construction
:::

The question of **volume** in a software application remains a complex issue, as it involves many varied and interdependent parameters. These include:
- The number of users
- Server specifications
- The quantity of data
- The size of that data
- The nature and sequencing of operations performed
- The number of operations launched simultaneously
- ...

This list is not exhaustive.

---

## Focus on NumaHOP

For NumaHOP, let's first focus on the functional core of its processing: **the delivery and quality control process**. Our analysis of processed data and operational experience allow us to define best practices to ensure process quality and acceptable performance for users.

### Batch sizing

The number of **documentary units (DUs)**, the number of pages they contain, and the size of the associated master files are key parameters to consider.

#### Recommendations for DU size and number of DUs per batch

| Size per DU        | Recommended number of DUs per batch |
|--------------------|--------------------------------------|
| Up to 50 MB        | Up to 500                            |
| 50 to 100 MB       | Up to 300                            |
| 100 to 500 MB      | Up to 150                            |
| 500 MB to 1 GB     | Up to 50                             |
| 1 GB to 5 GB       | Up to 20                             |
| 5 GB to 10 GB      | Up to 10                             |
| Over 10 GB         | Up to 5                              |

### Notes on recommendations

These values are **indicative**. If a minority of documentary units exceeds the stated size thresholds, this does not necessarily invalidate the recommended number for the batch. For example:

- If the majority of DUs do not exceed **50 MB**, but a few (less than 5%) are above this threshold, the recommended number of **500 DUs** may still be valid.
- However, if among that 5% exceeding 50 MB, the majority exceed **1 GB**, it is preferable to **reduce the number of DUs** in the batch.

### Impact of server usage

These values must also be adjusted based on server load. If other deliveries are in progress when you launch yours, this may impact the quality of the process and overall performance.

## Conclusion

To ensure optimal performance and consistent processing quality, it is recommended to:
- **Define homogeneous batches** in terms of file size.
- **Coordinate deliveries** to avoid server overload.

These best practices help ensure a smooth and efficient process for all NumaHOP users.
