Feature: Help component
  I want to change Help component properties

  Background: Open Help component page
    Given I open "Help" component page

  @positive
  Scenario Outline: Change children to <children>
    When I set children to "<children>"
      And I hover mouse onto help icon
    Then  tooltipPreview on preview is set to "<children>"
    Examples:
      | children                |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
      | <>                      |

  @positive
  Scenario Outline: Change tooltip position to <tooltipPosition> and align to <tooltipAlign>
    When I select tooltipPosition to "<tooltipPosition>"
      And I select tooltipAlign to "<tooltipAlign>"
      And I hover mouse onto help icon
    Then tooltipPosition is set to "<tooltipPosition>"
      And tooltipAlign is set to "<tooltipAlign>"
    Examples:
      | tooltipPosition | tooltipAlign |
      | left            | center       |
      | right           | bottom       |
      | top             | left         |
      | bottom          | right        |
      | right           | top          |

  @positive
  Scenario Outline: Change href to <href>
    When I set href to "<href>"
    Then link on preview is "<href>"
    Examples:
      | href                    |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
      | <>                      |

