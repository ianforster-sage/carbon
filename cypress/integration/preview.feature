Feature: Preview component
  I want to test Preview component

  Background: Open Preview component page
    Given I open "Preview" component page

  @positive
  Scenario: Enable loading checkbox for a Preview component
    When I check loading checkbox
    Then Preview component is loading

  @positive
  Scenario: Enable and disable loading checkbox for a Preview component
    When I check loading checkbox
      And I uncheck loading checkbox
    Then Preview component is not loading
  
  @positive
  Scenario Outline: Change Preview children to <children>
    When I set children to "<children>"
      And I uncheck loading checkbox
    Then Preview children is set to "<children>"
    Examples:
      | children                |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
      # @ignore because of FE-1447
      # | <>                       |

  @positive
  Scenario Outline: Set width to <width>
    When I set width to "<width>"
      And I check loading checkbox 
    Then Preview width is set to "<width>"
    Examples:
      | width |
      | 0     |
      | 1     |
      | 10    |
      | 100   |

  @positive
  Scenario Outline: Set height to <height>
    When I set height to "<height>"
      And I check loading checkbox
    Then Preview height is set to "<height>"
    Examples:
      | height |
      | 0      |
      | 1      |
      | 10     |
      | 100    |

  @positive
  Scenario Outline: Set lines to <lines>
    When I set lines to "<lines>"
    Then Preview has "<lines>" lines
    Examples:
      | lines |
      | 0     |
      | 1     |
      | 10    |
      | 100   |