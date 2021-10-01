package io.cloaked.api.user;

import java.util.Arrays;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDto {
  
  private Long id;
  private String username;
  private String password;

  public static UserDto of(User user) {
    return new UserDto(user.getId(), user.getUsername(), user.getPassword());
  }

  public static List<UserDto> of(List<User> user) {
    
    return Arrays.asList(new UserDto(
      user.get(0).getId(), 
      user.get(0).getUsername(), 
      user.get(0).getPassword()
    ));
  }
}
